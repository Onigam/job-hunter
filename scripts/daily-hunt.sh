#!/bin/bash
# Daily Job Hunt — runs via cron at 13:30
# Sends results to Telegram after completion

set -euo pipefail

REPO_DIR="/Users/magino/magino-dev/job-hunter"
LOG_FILE="/tmp/job-hunter-$(date +%Y-%m-%d).log"
PROMPT_FILE="$REPO_DIR/.claude/prompts/job-hunter-orchestrator-v2.md"

echo "[$(date)] Starting daily job hunt..." | tee "$LOG_FILE"

cd "$REPO_DIR"

# Fix : ANTHROPIC_API_KEY écrase le login OAuth Claude (401 Invalid API key)
unset ANTHROPIC_API_KEY || true

# Run Claude Code with the orchestrator prompt
claude --model claude-opus-5-5 --dangerously-skip-permissions \
  -p "$(cat "$PROMPT_FILE")" \
  --output-format text \
  2>&1 | tee -a "$LOG_FILE"

echo "[$(date)] Job hunt complete." | tee -a "$LOG_FILE"
