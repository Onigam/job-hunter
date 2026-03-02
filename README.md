# Job Hunter

Automated daily job hunting powered by **Claude Code** (`claude` CLI) + **GitHub Actions**.

Searches for senior engineering roles matching your profile across multiple platforms (including authenticated LinkedIn search), ranks them by relevance, and sends the top 5 via **Telegram** every morning at 8:00 Geneva time.

---

## How It Works

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐     ┌──────────┐
│  Cron/Manual │────▶│ Job Searcher │────▶│ Profile Matcher │────▶│  Report  │
│   Trigger    │     │    Agent     │     │     Agent       │     │ Builder  │
└─────────────┘     └──────────────┘     └─────────────────┘     └──────────┘
                          │                      │                      │
                    LinkedIn API +          Score & rank          Generate daily
                    WebSearch on            against profile        report + Telegram
                    Indeed, Wellfound...    Dedup vs history       notification
```

### Daily Pipeline

1. **Search** — The `job-searcher` agent searches LinkedIn via authenticated API (primary source) and runs web searches across Indeed, SwissDevJobs, Wellfound, WeWorkRemotely, RemoteOK, and Hacker News hiring threads.
2. **Match** — The `profile-matcher` agent scores each offer against your profile (technical fit, seniority, location, company type, role impact) and filters duplicates.
3. **Report** — The `report-builder` agent generates a daily JSON report, updates the offers database, and creates a Telegram notification message.
4. **Notify** — The workflow sends the top 5 offers to your Telegram chat.
5. **Commit** — Results are committed under your GitHub identity, so daily runs show up in your contribution calendar.

---

## Setup

### 1. Fork or Clone

```bash
git clone https://github.com/Onigam/job-hunter.git
cd job-hunter
```

### 2. Configure Your Profile

Edit `profile/context.md` with your:
- Career summary and highlights
- Technical skills
- Target roles (priority order)
- Location preferences
- Company preferences
- Search keywords

### 3. Add GitHub Secrets

Go to **Settings → Secrets and variables → Actions** in your GitHub repo and add:

| Secret | Description | How to get it |
|--------|-------------|---------------|
| `CLAUDE_CODE_OAUTH_TOKEN` | Claude OAuth token (preferred — uses Pro plan, no API credits) | Run `claude` locally → `~/.claude/.credentials.json` → copy `claudeAiOauth2Token` |
| `ANTHROPIC_API_KEY` | Anthropic API key (fallback if no OAuth token) | [console.anthropic.com](https://console.anthropic.com) |
| `LINKEDIN_COOKIE` | LinkedIn `li_at` session cookie for authenticated search | Browser DevTools → Application → Cookies → linkedin.com → `li_at` |
| `TELEGRAM_BOT_TOKEN` | Telegram bot token | Talk to [@BotFather](https://t.me/BotFather) on Telegram |
| `TELEGRAM_CHAT_ID` | Your Telegram chat ID | See [instructions below](#getting-your-telegram-chat-id) |

> **Note:** `CLAUDE_CODE_OAUTH_TOKEN` takes priority. If set, `ANTHROPIC_API_KEY` is ignored. You only need one of the two.

### 4. Test the Workflow

Go to the **Actions** tab in your repo → Select **Job Hunter** → Click **Run workflow**.

The first run may take a few minutes. Check the workflow logs for results.

### 5. Automatic Daily Runs

The workflow runs automatically every day at **08:00 Geneva time** (07:00 UTC). You can change the schedule in `.github/workflows/job-hunt.yml`:

```yaml
on:
  schedule:
    - cron: '0 7 * * *'  # Change this to your preferred time (UTC)
```

---

## Getting Your Telegram Chat ID

1. Create a bot with [@BotFather](https://t.me/BotFather) on Telegram:
   - Send `/newbot`
   - Choose a name and username
   - Copy the **bot token**

2. Start a chat with your new bot (send `/start`)

3. Get your chat ID:
   ```bash
   curl https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
   Look for `"chat":{"id": 123456789}` in the response — that number is your chat ID.

4. Add both values as GitHub secrets (`TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`).

---

## Project Structure

```
job-hunter/
├── .claude/
│   ├── agents/
│   │   ├── job-searcher.md        # Searches LinkedIn API + web platforms
│   │   ├── profile-matcher.md     # Scores and ranks offers vs profile
│   │   └── report-builder.md      # Generates reports + Telegram messages
│   ├── prompts/
│   │   └── job-hunter-orchestrator.md  # Main orchestrator prompt
│   └── settings.json              # Claude Code permissions config
├── .github/
│   └── workflows/
│       └── job-hunt.yml           # GitHub Actions workflow
├── data/
│   ├── offers.json                # All tracked offers (dedup database)
│   └── daily/                     # Daily report files
│       ├── YYYY-MM-DD.json        # Daily results
│       └── YYYY-MM-DD-telegram.txt # Telegram message
├── profile/
│   └── context.md                 # Your candidate profile
├── CLAUDE.md                      # Claude Code project config
└── README.md
```

## Offers Database

All offers are tracked in `data/offers.json` to avoid duplicates. Each offer includes:
- Title, company, location, source URL
- Relevance score (0-100)
- Date found
- Status (new/seen)

## Scoring System

Offers are scored on 5 dimensions (100 points total):

| Dimension | Points | What it measures |
|-----------|--------|-----------------|
| Technical Fit | 30 | Tech stack overlap (TypeScript, Node.js, React, Python, AWS...) |
| Seniority | 25 | Role level (Staff+, Principal, Founding, CTO) |
| Location | 20 | Geneva > Switzerland > Remote Europe > USA |
| Company Fit | 15 | Startup/scale-up vs enterprise/consulting |
| Role Impact | 10 | Platform ownership, build-from-zero opportunities |

---

## Customization

### Change Search Keywords
Edit the search queries in `.claude/agents/job-searcher.md`.

### Adjust Scoring Weights
Modify the scoring criteria in `.claude/agents/profile-matcher.md`.

### Change Notification Format
Update the Telegram message template in `.claude/agents/report-builder.md`.

### Change Orchestrator Prompt
Edit `.claude/prompts/job-hunter-orchestrator.md`.

### Change Schedule
Edit the cron expression in `.github/workflows/job-hunt.yml`.

---

## Tech Stack

- **Claude Code** (`@anthropic-ai/claude-code`) — AI-powered job search and analysis
- **LinkedIn Voyager API** — Authenticated job search via session cookie
- **GitHub Actions** — Scheduling and orchestration
- **Telegram Bot API** — Notifications
- **WebSearch** — Real-time job board searches

---

## License

MIT
