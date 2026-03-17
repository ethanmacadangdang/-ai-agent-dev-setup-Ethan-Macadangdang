# Workshop README

## Student Details

- Name: **[Your Full Name]**
- Workshop Cohort: **[Your Cohort - e.g., AI Agent Bootcamp Cohort 2026-W1]**

## Development Environment Checklist (with screenshots)

- [ ] ✅ Node.js installed (`node --version`)
	- Screenshot: `screenshots/node-version.png`
- [ ] ✅ Git installed (`git --version`)
	- Screenshot: `screenshots/git-version.png`
- [ ] ✅ VS Code Insider running with GitHub Copilot enabled
	- Screenshot: `screenshots/vscode-insider-copilot.png`
- [ ] ✅ Claude Desktop open with all 4 MCP servers connected
	- Screenshot: `screenshots/claude-4-mcp-servers.png`

## MCP Servers: Purpose and Functionality

### 1) Rolldice MCP
- **Purpose:** Quick utility server for randomness testing and simple tool-call validation.
- **Functionality:** Exposes a `roll_dice` tool that accepts dice sides (e.g., 6, 20) and returns a random result.

### 2) Bootcamp AI Agent MCP
- **Purpose:** Learning support for workshop/bootcamp workflows.
- **Functionality:** Generates structured plans or guidance (for example, topic-based daily learning plans).

### 3) Calendar Booking MCP
- **Purpose:** Scheduling and availability checks.
- **Functionality:** Handles date-based availability queries and can be extended for booking workflows.

### 4) GitHub MCP
- **Purpose:** AI-assisted software workflow management in GitHub.
- **Functionality:** Supports repository discovery, issues/PR access, and other repo interactions depending on connected tools.

## Troubleshooting Notes

### Issue 1: Local MCP servers not appearing in Claude Desktop
- **Symptom:** Only Gmail and Google Calendar connectors were visible.
- **Cause:** Active Claude Desktop config had `mcpServers` reset/empty.
- **Fix:** Updated `claude_desktop_config.json` with explicit MCP server entries and restarted Claude Desktop fully (including tray exit).

### Issue 2: Server startup/path reliability on Windows
- **Symptom:** Local MCP servers intermittently failed to load.
- **Cause:** Command resolution differences for `node`/`npx` in some launch contexts.
- **Fix:** Switched to absolute executable paths (`C:/Program Files/nodejs/node.exe` and `C:/Program Files/nodejs/npx.cmd`).

### Issue 3: GitHub token handling
- **Symptom:** PAT was accidentally exposed in config/log output.
- **Cause:** Token was inserted directly during setup.
- **Fix:** Replaced with placeholder, revoked exposed token, generated a fresh PAT, and reconfigured securely.

## Notes for Assessor

- Screenshot files should be added to a `screenshots/` folder in this project.
- Supporting run/test evidence is documented in `VERIFICATION.md`.
