# Browser Agent — Sypnose Navigator

Deep browser navigation for Claude. Persistent sessions, full context, no warnings.

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose
```

---

## Manual config (if you prefer)

**Claude Desktop** — add to your config file:

```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": [
        "-y", "@playwright/mcp",
        "--browser", "chromium",
        "--user-data-dir", "PATH_TO_YOUR_PROFILE"
      ]
    }
  }
}
```

Replace `PATH_TO_YOUR_PROFILE` with:
- Windows: `C:\Users\YourName\sypnose-browser`
- Mac/Linux: `/home/yourname/.sypnose-browser`

**Claude Code:**
```bash
claude mcp add browser -- npx -y @playwright/mcp --browser chromium --user-data-dir ~/.sypnose-browser
```

---

## Persistent login

With `--user-data-dir` set, Claude remembers your logins forever.  
Log in once to LinkedIn, Gmail, GitHub — never again.
