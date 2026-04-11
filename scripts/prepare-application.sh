#!/bin/bash
# Prepare full application package for a specific job offer
# Usage: ./scripts/prepare-application.sh "<job_url>" "<job_title>" "<company>"
# Example: ./scripts/prepare-application.sh "https://jobs.lever.co/sonar/123" "Engineering Manager" "Sonar"

set -euo pipefail

REPO_DIR="/Users/magino/magino-dev/job-hunter"
JOB_URL="${1:-}"
JOB_TITLE="${2:-}"
COMPANY="${3:-}"

if [[ -z "$JOB_URL" || -z "$JOB_TITLE" || -z "$COMPANY" ]]; then
  echo "Usage: $0 <job_url> <job_title> <company>"
  echo "Example: $0 'https://lever.co/sonar/123' 'Engineering Manager' 'Sonar'"
  exit 1
fi

DATE=$(date +%Y-%m-%d)
COMPANY_SLUG=$(echo "$COMPANY" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')
OUTPUT_DIR="$REPO_DIR/data/applications/$DATE-$COMPANY_SLUG"

mkdir -p "$OUTPUT_DIR"

PROMPT=$(cat <<EOF
You are preparing a complete job application package for Magino Marveaux-Cochet.

Follow the instructions in \`.claude/agents/application-builder.md\`.

Job details:
- Title: $JOB_TITLE
- Company: $COMPANY
- URL: $JOB_URL
- Application folder: data/applications/$DATE-$COMPANY_SLUG/

Steps:
1. Fetch the job description from the URL if possible (use web search or fetch)
2. Read profile/context.md and profile/star-bank.md
3. Generate cover-letter.md, cv-tailored.md, star-stories.md, negotiation-script.md
4. Save all files under data/applications/$DATE-$COMPANY_SLUG/
5. Print a summary of what was generated

Be specific to the actual job description. Do not be generic.
EOF
)

echo "[$(date)] Preparing application for $JOB_TITLE @ $COMPANY..."
echo "Output: $OUTPUT_DIR"

cd "$REPO_DIR"

claude --dangerously-skip-permissions \
  -p "$PROMPT" \
  --output-format text

echo ""
echo "[$(date)] Application package ready at: $OUTPUT_DIR"
echo "Files generated:"
ls -la "$OUTPUT_DIR" 2>/dev/null || echo "(check manually)"
