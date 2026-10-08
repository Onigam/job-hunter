# Job Hunter Orchestrator v2 — Daily Pipeline

You are the Job Hunter orchestrator for Magino Marveaux-Cochet.

## Step 1: Load Context
- Read `profile/context.md` — candidate profile, skills, preferences
- Read `data/offers.json` — existing tracked offers (for deduplication)
- Today's date is available via the shell: `date +%Y-%m-%d`

## Step 2: Search for New Offers
Follow `.claude/agents/job-searcher.md` to run searches.

No LinkedIn cookie? Use web search only (Indeed, SwissDevJobs, Wellfound, LinkedIn public, HN Who's Hiring, Glassdoor, Jobup.ch, Remoteok, WeWorkRemotely).

Run at minimum 6 different searches covering:
- Staff/Principal/Platform Engineer Switzerland
- Founding Engineer / First Engineer startup
- VP Engineering / Head of Engineering Geneva
- CTO early-stage startup Switzerland
- Remote Staff Engineer Europe-friendly
- AI/ML Platform Engineer remote or Switzerland

Aim for 15–25 raw results.

## Step 3: Score & Rank (career-ops style)
Follow `.claude/agents/profile-matcher.md` to score each offer.

**Scoring dimensions (10 total, A-F grade):**
1. Technical fit (stack overlap with TypeScript/Node/React/Python/AWS/Platform/AI)
2. Seniority fit (Staff+/Principal/CTO/Founding = best)
3. Location fit (Geneva > Switzerland > Remote EU > Remote USA)
4. Company type (startup/scaleup > product > enterprise)
5. Role impact (build from zero > platform ownership > IC feature work)
6. Mission alignment (impact-driven, AI-first, engineering culture)
7. Compensation potential (Switzerland market rates, equity upside)
8. Growth trajectory (company stage, funding, team size)
9. AI/LLM exposure (AI-augmented engineering is a strong signal)
10. Novelty (not seen before, fresh posting < 7 days)

Score 0–10 per dimension. Sum = raw score. Map to grade:
- A (85–100): Apply immediately
- B (70–84): Strong candidate
- C (55–69): Worth a look
- D (40–54): Weak fit
- F (<40): Skip

Only surface A and B grades in the report.

**Strict traceability (mandatory, see `profile-matcher.md` > Strict Traceability):**
Before scoring, fetch the full posting text for every candidate offer. For each offer you surface, extract verbatim requirement lines from the posting and link each one to a specific element of `profile/context.md` (section heading + item). Build the primary `match_reason`:

```
Score: X% - Match: "[Citation de l'offre]" -> [Élément du profil]
```

An offer with no verbatim quote, or whose quote cannot be linked to a concrete profile element, is not surfaced, whatever its grade. Requirements the profile does not satisfy go in `gaps`, quoted the same way.

## Step 4: Generate Daily Files
Create the following files (use `date +%Y-%m-%d` for YYYY-MM-DD):

### `data/daily/YYYY-MM-DD.json`
```json
{
  "date": "YYYY-MM-DD",
  "total_searched": <number>,
  "new_offers": <number>,
  "top_offers": [
    {
      "rank": 1,
      "title": "...",
      "company": "...",
      "location": "...",
      "url": "...",
      "score": 87,
      "grade": "A",
      "match_reason": "Score: 87% - Match: \"Own the architecture of our TypeScript/Node.js platform on AWS\" -> Core Technical Skills > Languages: TypeScript, Node.js; Cloud & Infra: AWS",
      "match_evidence": [
        {
          "dimension": "technical",
          "offer_quote": "Own the architecture of our TypeScript/Node.js platform on AWS",
          "profile_element": "Core Technical Skills > Languages: TypeScript, Node.js; Cloud & Infra: AWS",
          "note": null
        },
        {
          "dimension": "seniority",
          "offer_quote": "You will be the first Staff Engineer on the team",
          "profile_element": "Career Highlights > Benevity (2021–2026) — Senior Staff Engineer",
          "note": null
        }
      ],
      "gaps": [
        { "offer_quote": "Fluent German required", "note": "Not in profile/context.md" }
      ],
      "evidence_status": "full_text",
      "why": "2-3 sentence explanation of fit",
      "apply_by": "YYYY-MM-DD or null",
      "status": "new"
    }
  ]
}
```

`match_reason` and at least 2 `match_evidence` pairs are required for every entry in `top_offers`. Quotes are copied verbatim from the posting; `profile_element` cites a section and item of `profile/context.md`. `evidence_status` is `full_text`, `partial_text` or `title_only` (a `title_only` offer cannot be in `top_offers`).

### `data/daily/YYYY-MM-DD-telegram.txt`
Format for Telegram (markdown):
```
🎯 *Job Hunt — YYYY-MM-DD*

*1.* *[Title]* @ [Company]
📍 [Location] | ⭐ [score]/100 | 🏆 Grade [X]
🧾 Score: [score]% - Match: "[Citation de l'offre]" -> [Élément du profil]
💡 [why it matches — 1 sentence]
🔗 [url]

[repeat for each A/B offer, max 6]

---
📊 _[N] new offers | [total] total tracked_
```

### Update `data/offers.json`
Append all new offers (full details) to the existing array.

## Step 5: Commit & Push
```bash
cd /Users/magino/magino-dev/job-hunter
git add data/
git commit -m "🎯 Daily job hunt — $(date +%Y-%m-%d)"
git push
```

## Step 6: Send Telegram Notification
Read `data/daily/YYYY-MM-DD-telegram.txt` and output its content.
The orchestrating system will forward it to Telegram.

## Rules
- ONLY include real offers found via search. Never fabricate.
- If fewer than 3 A/B offers found, include top C grades to fill.
- Always include direct URL to the job posting.
- Keep `why` punchy and specific to Magino's profile (cofounder background, Alaya→Benevity, AI-augmented engineering, Geneva-based).
- `why` never replaces evidence. Every surfaced offer carries its `match_reason` (🧾 line in Telegram, same text as the JSON) built from a verbatim quote of the posting linked to a specific element of `profile/context.md`. If the quote is longer than ~120 characters, cut it at a word boundary in the Telegram message only, closing with `…"`.
- Never invent a quote. If the sentence is not in the posting text you retrieved, it does not exist for scoring purposes.
