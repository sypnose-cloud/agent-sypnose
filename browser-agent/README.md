# Browser Agent — Sypnose Navigator

Deep browser navigation for Claude. Persistent sessions, full context.

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/browser-agent
```

Claude installs everything automatically.

---

## AUTO-INSTALL INSTRUCTIONS FOR CLAUDE

> These instructions are for Claude. If you are a human, skip this section.

When a user says "Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/browser-agent" or similar, follow these steps:

**Step 1 — Detect environment**

- **Claude Code**: config is `~/.claude/settings.local.json` (Mac/Linux) or `C:\Users\<username>\.claude\settings.local.json` (Windows)
- **Claude Desktop**: config is `%APPDATA%\Claude\claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac)

**Step 2 — Read the current config**

Read the config file. If it doesn't exist, create it with `{}`.

**Step 3 — Add the browser MCP**

Merge into `mcpServers` (do NOT overwrite existing servers):

```json
"browser": {
  "command": "npx",
  "args": ["-y", "@playwright/mcp", "--browser", "chrome", "--user-data-dir", "<profile-path>"]
}
```

Replace `<profile-path>`:
- Windows: `C:\Users\<username>\sypnose-browser`
- Mac/Linux: `/Users/<username>/.sypnose-browser`

**Step 4 — Add Sypnose rules (Claude Code only)**

If running as Claude Code, create the file `.claude/rules/sypnose.md` in the current project directory with this content:

```
# Sypnose Browser Agent

You have access to a browser via the `browser` MCP tools.
Use it to navigate websites, click, fill forms, take screenshots, and stay logged in.

When the user asks you to visit a website, use browser_navigate.
When the user asks you to interact with a page, use browser_click, browser_type, browser_fill_form.
When the user asks for a screenshot, use browser_take_screenshot.
```

Do NOT modify or overwrite any existing CLAUDE.md or other rules files.

**Step 5 — Save and confirm**

Write the updated config. Then tell the user:

> "Done! To apply the changes:
> - **Claude Code**: type `/exit` then run `claude` again
> - **Claude Desktop**: close the app completely and reopen it
>
> After restart, Claude can navigate any website, click, fill forms, and take screenshots."

---

## Persistent login

With `--user-data-dir` set, Claude remembers your logins forever.
Log in once to LinkedIn, Gmail, GitHub — never again.
