# MCP Servers List

This document describes the 4 MCP servers configured in `claude-desktop-config.json`.

| Server | Purpose | Startup Command | Required Env Vars | Basic Health Check |
|---|---|---|---|---|
| Rolldice | Returns dice roll outcomes for quick utility/testing workflows. | `node ./servers/rolldice/index.js` | None | Connect and call a dice tool (example: roll d20). |
| Bootcamp AI Agent | Bootcamp-focused assistant workflows (Q&A, task guidance, automation depending on implementation). | `node ./servers/bootcamp-ai-agent/index.js` | Optional (depends on your implementation) | Connect and invoke one known bootcamp tool. |
| Calendar Booking | Calendar availability and booking operations. | `node ./servers/calendar-booking/index.js` | Depends on provider/API (for example calendar API keys) | Connect and run an availability query tool. |
| GitHub | GitHub repository/issue/PR operations through MCP. | `npx -y @modelcontextprotocol/server-github` | `GITHUB_PERSONAL_ACCESS_TOKEN` | Connect and run a repo/issue read tool. |

## Notes

- Keep local custom servers in `./servers/<server-name>/index.js` or adjust paths in the config.
- Replace `<YOUR_GITHUB_PAT>` with a valid token before using the GitHub MCP server.
- If your custom servers require API keys, add them under each server's `env` block in the config file.
