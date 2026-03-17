# VERIFICATION.md

## 1) Screenshot Proof: Each MCP Server Working in Claude Desktop

Add one screenshot per server interaction below:

- Rolldice MCP working
  - Screenshot: `screenshots/verify-rolldice.png`
  - Prompt used: `Use the rolldice MCP tool "roll_dice" with {"sides": 6}.`
  - Result summary: [Add observed output]

- Bootcamp AI Agent MCP working
  - Screenshot: `screenshots/verify-bootcamp.png`
  - Prompt used: `Use bootcamp-ai-agent daily_plan for topic "Node.js APIs" and hours 3.`
  - Result summary: [Add observed output]

- Calendar Booking MCP working
  - Screenshot: `screenshots/verify-calendar.png`
  - Prompt used: `Use calendar-booking check_availability for date 2026-03-20.`
  - Result summary: [Add observed output]

- GitHub MCP working
  - Screenshot: `screenshots/verify-github.png`
  - Prompt used: `Use GitHub MCP to search repositories for owner:<your-username>.`
  - Result summary: [Add observed output]

## 2) GitHub MCP Example: Repository Interaction

Provide one real interaction transcript/snippet:

- Example prompt: `Use GitHub MCP to list open pull requests for owner/repo.`
- Example output summary: [Paste result details]
- Screenshot: `screenshots/github-mcp-repo-interaction.png`

## 3) Git Commit History (Version Control Workflow)

### Command(s) used

```bash
git log --oneline --decorate -n 10
```

### Output evidence

Paste your output here:

```text
[Paste git log output here]
```

### Workflow notes

- Include at least one commit for setup/configuration.
- Include at least one commit for documentation updates.
- Use meaningful commit messages that describe the change intent.

## 4) Final Verification Checklist

- [ ] All 4 MCP servers connected in Claude Desktop.
- [ ] One successful tool call captured per server.
- [ ] GitHub MCP repo interaction captured.
- [ ] Git commit history added.
- [ ] All screenshots stored in `screenshots/` and referenced correctly.
