#!/bin/bash
# Prepare full application package for a specific job offer
# Usage: ./scripts/prepare-application.sh "<job_url>" "<job_title>" "<company>"
# Example: ./scripts/prepare-application.sh "https://jobs.lever.co/sonar/123" "Engineering Manager" "Sonar"

set -euo pipefail

export PATH="$HOME/.nvm/versions/node/v24.13.0/bin:$PATH"

REPO_DIR="/Users/magino/magino-dev/job-hunter"
RESUME_DIR="/Users/magino/magino-dev/resume"
JOB_URL="${1:-}"
JOB_TITLE="${2:-}"
COMPANY="${3:-}"
TEMPLATE="${4:-classic}"  # classic | sidebar | modern

if [[ -z "$JOB_URL" || -z "$JOB_TITLE" || -z "$COMPANY" ]]; then
  echo "Usage: $0 <job_url> <job_title> <company> [template]"
  echo "Example: $0 'https://lever.co/sonar/123' 'Engineering Manager' 'Sonar' classic"
  exit 1
fi

DATE=$(date +%Y-%m-%d)
COMPANY_SLUG=$(echo "$COMPANY" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')
OUTPUT_DIR="$REPO_DIR/data/applications/$DATE-$COMPANY_SLUG"
TAILORED_YAML="/tmp/resume-tailored-$COMPANY_SLUG.yaml"

mkdir -p "$OUTPUT_DIR"

echo ""
echo "╔═══════════════════════════════════════════════════════╗"
echo "║  Job Application Package — $COMPANY"
echo "║  Role: $JOB_TITLE"
echo "║  Output: $OUTPUT_DIR"
echo "╚═══════════════════════════════════════════════════════╝"
echo ""

# ── Step 1: Generate cover letter, STAR stories, negotiation script ──────────
echo "▶ Step 1/4 — Generating application documents..."

PROMPT=$(cat <<EOF
You are preparing a complete job application package for Magino Marveaux-Cochet.

Follow the instructions in \`.claude/agents/application-builder.md\`.

Job details:
- Title: $JOB_TITLE
- Company: $COMPANY  
- URL: $JOB_URL

Profile sources:
- profile/context.md — core profile, skills, target roles
- profile/star-bank.md — STAR behavioral stories

Instructions:
1. Fetch the job description from: $JOB_URL (use WebFetch or web search)
2. Read profile/context.md and profile/star-bank.md
3. Generate the following files in data/applications/$DATE-$COMPANY_SLUG/:
   - cover-letter.md (max 250 words, direct tone, specific to this role/company)
   - star-stories.md (3-5 STAR+R answers for likely interview questions)
   - negotiation-script.md (salary anchors, counter-offer scripts, equity notes for Switzerland)

4. Also generate data/applications/$DATE-$COMPANY_SLUG/resume-tailored.yaml
   This is a COPY of profile/context.md reformatted as YAML matching the schema in /Users/magino/magino-dev/resume/content/en/resume.yaml
   - Reorder highlights to front-load keywords from the job description
   - Keep all facts accurate — no fabrication
   - Output valid YAML that could replace the base resume.yaml

Output all files, then print: "APPLICATION_DOCS_DONE"
EOF
)

cd "$REPO_DIR"
claude --dangerously-skip-permissions -p "$PROMPT" --output-format text
echo ""

# ── Step 2: Copy tailored YAML to resume repo ─────────────────────────────────
TAILORED_YAML_IN_APP="$OUTPUT_DIR/resume-tailored.yaml"

if [[ -f "$TAILORED_YAML_IN_APP" ]]; then
  echo "▶ Step 2/4 — Injecting tailored YAML into resume repo..."
  
  # Backup original
  cp "$RESUME_DIR/content/en/resume.yaml" "$RESUME_DIR/content/en/resume.yaml.bak"
  
  # Replace with tailored version
  cp "$TAILORED_YAML_IN_APP" "$RESUME_DIR/content/en/resume.yaml"
  echo "  ✓ Tailored YAML injected"
else
  echo "▶ Step 2/4 — No tailored YAML found, using base resume..."
fi

# ── Step 3: Build Astro site + generate PDFs ─────────────────────────────────
echo "▶ Step 3/4 — Building resume site..."
cd "$RESUME_DIR/website"
pnpm build 2>&1 | grep -E "(✓|error|warn|Complete)" | head -10
echo "  ✓ Build complete"

echo "▶ Step 4/4 — Generating PDFs..."
pnpm generate:pdf 2>&1 | grep -E "(PDF generated|error)"

# Copy PDFs to application folder
PDF_OUTPUT="$RESUME_DIR/output"
cp "$PDF_OUTPUT/resume-${TEMPLATE}-en.pdf" "$OUTPUT_DIR/cv-${COMPANY_SLUG}-en.pdf" 2>/dev/null || true
cp "$PDF_OUTPUT/resume-${TEMPLATE}-fr.pdf" "$OUTPUT_DIR/cv-${COMPANY_SLUG}-fr.pdf" 2>/dev/null || true
echo "  ✓ PDFs copied to application folder"

# ── Restore original YAML ─────────────────────────────────────────────────────
if [[ -f "$RESUME_DIR/content/en/resume.yaml.bak" ]]; then
  mv "$RESUME_DIR/content/en/resume.yaml.bak" "$RESUME_DIR/content/en/resume.yaml"
  echo "  ✓ Original resume.yaml restored"
fi

# ── Summary ───────────────────────────────────────────────────────────────────
echo ""
echo "╔═══════════════════════════════════════════════════════╗"
echo "║  ✅ Application package ready!"
echo "╚═══════════════════════════════════════════════════════╝"
echo ""
echo "Files in $OUTPUT_DIR:"
ls -la "$OUTPUT_DIR"
echo ""
echo "Next steps:"
echo "  1. Review cover-letter.md — tweak the opening line"
echo "  2. Check cv-${COMPANY_SLUG}-en.pdf — spot-check layout"
echo "  3. Read star-stories.md before the interview"
echo "  4. Use negotiation-script.md when they make an offer"
