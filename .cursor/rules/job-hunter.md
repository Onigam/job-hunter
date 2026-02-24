# Job Hunter — Project Rules

## Project Overview
Automated daily job hunting powered by Claude Code + GitHub Actions.
Searches for job offers matching Magino's profile, ranks them by relevance, and sends top 5 via Telegram.

## Architecture
- **Profile**: `profile/context.md` — Candidate profile and search criteria
- **Data**: `data/offers.json` — All tracked offers (dedup database)
- **Daily Reports**: `data/daily/YYYY-MM-DD.json` — Daily search results
- **Telegram Messages**: `data/daily/YYYY-MM-DD-telegram.txt` — Formatted notification
- **Agents**: `.claude/agents/` — Specialized agent instructions
- **Workflow**: `.github/workflows/job-hunt.yml` — Cron + manual trigger

## Agent Roles
- `job-searcher` — Searches for job offers across multiple platforms
- `profile-matcher` — Matches and ranks offers against candidate profile
- `report-builder` — Generates daily reports and Telegram messages

## Daily Workflow
1. Read candidate profile from `profile/context.md`
2. Load existing offers from `data/offers.json`
3. Search for new offers using WebSearch (LinkedIn, Indeed, SwissDevJobs, etc.)
4. Filter duplicates using offer URL hash
5. Score and rank new offers against profile
6. Pick top 5 most relevant new offers
7. Write daily report to `data/daily/`
8. Update `data/offers.json` with new offers
9. Generate Telegram message
10. Commit changes

## Search Criteria
- **Roles**: Staff Engineer, Senior Staff Engineer, Principal Engineer, Platform Engineer, Founding Engineer, Engineering Lead, VP Engineering, CTO
- **Tech Stack**: TypeScript, Node.js, React, Python, AWS, Kubernetes, AI/ML, Platform Engineering
- **Locations (priority order)**: Geneva > Switzerland > Remote (Europe-friendly) > USA
- **Company Types**: Startups, Scale-ups, Post-acquisition, Tech companies
- **Seniority**: Staff+ level, IC or hybrid IC/Lead

## Offer Deduplication
Each offer gets a unique ID = SHA256(url). Before adding, check if ID exists in `data/offers.json`.

## Telegram Message Format
Use Markdown formatting. Include: rank, title, company, location, link, 1-line summary, relevance score (stars).
