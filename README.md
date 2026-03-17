# Workshop README

## Student Details

- Name: Prince Ethan Macadangdang
- Workshop Cohort: FULL STACK & AGENTIC AI INTERNSHIP PROGRAM

## Development Environment Checklist (with screenshots)

- [ ] ✅ Node.js installed (`node --version`)
	- Screenshot: <img width="462" height="130" alt="image" src="https://github.com/user-attachments/assets/f4151f18-ebda-4c1b-90d0-6680f5d2fafd" />

- [ ] ✅ Git installed (`git --version`)
	- Screenshot: <img width="462" height="130" alt="image" src="https://github.com/user-attachments/assets/8bd9f1a8-7445-4763-9b84-cdb2c1afdbf3" />

- [ ] ✅ VS Code Insider running with GitHub Copilot enabled
	- Screenshot: <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/35cf9da2-b1ee-41f0-94a2-3046f6ce0b65" />

- [ ] ✅ Claude Desktop open with all 4 MCP servers connected
	- Screenshot: <img width="1096" height="719" alt="image" src="https://github.com/user-attachments/assets/979a062e-7dbf-48d0-9c70-ea4c3a6b1aaf" />
	<img width="1197" height="710" alt="image" src="https://github.com/user-attachments/assets/7567f175-ed83-4198-a317-ae28f5f5fa90" />
	<img width="1040" height="619" alt="image" src="https://github.com/user-attachments/assets/66b776e8-5063-4883-a741-909d7258c623" />




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
