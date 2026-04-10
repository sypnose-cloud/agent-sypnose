# Sypnose Navigator — Browser + Search for Claude

One agent. Two superpowers: Claude navigates the web AND searches in real time — at the same time, in the same conversation.

Like Perplexity Desktop, but for Claude. Free. Open source.

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose
```

Claude installs both capabilities automatically.

---

## AUTO-INSTALL INSTRUCTIONS FOR CLAUDE

> These instructions are for Claude. If you are a human, skip this section.

When a user says "Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose" or similar, follow these steps:

**Step 1 — Detect environment**

- **Claude Code**: config is `~/.claude/settings.local.json` (Mac/Linux) or `C:\Users\<username>\.claude\settings.local.json` (Windows)
- **Claude Desktop**: config is `%APPDATA%\Claude\claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac)

**Step 2 — Read the current config**

Read the config file. If it doesn't exist, create it with `{}`.

**Step 3 — Add browser + search**

Merge this into the `mcpServers` section (do NOT overwrite existing servers):

```json
"browser": {
  "command": "npx",
  "args": ["-y", "@playwright/mcp", "--browser", "chromium", "--user-data-dir", "<profile-path>"]
}
```

Replace `<profile-path>`:
- Windows: `C:\Users\<username>\sypnose-browser`
- Mac/Linux: `/Users/<username>/.sypnose-browser`

**Step 4 — Save and confirm**

Write the updated config. Then tell the user:

> "Done! To apply the changes:
> - **Claude Code**: type `/exit` then run `claude` again
> - **Claude Desktop**: close the app completely and reopen it
>
> After restart, Claude can navigate any website and search the web in real time."

---

## Agents

| Agent | What it does | Install |
|-------|-------------|---------|
| [browser-agent](./browser-agent) | Navigate any website, click, fill forms, take screenshots | `Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/browser-agent` |
| [search-agent](./search-agent) | Real-time web search with sources | `Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/search-agent` |
| [capcut-agent](./capcut-agent) | Create and edit videos in CapCut | `Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/capcut-agent` |
| [linkedin-agent](./linkedin-agent) | LinkedIn posts, job search, connections | `Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/linkedin-agent` |

---

## What Claude can do

**Search** — without opening a browser
- Real-time web search with sources
- Current news, prices, documentation
- Any question that needs up-to-date information

**Navigate** — deep browser control
- Open any website and interact with it
- Log in to services and stay logged in
- Fill forms, click, extract content, take screenshots

**Both together**
- Search for something → navigate to the result → extract and summarize
- Find a company → go to their careers page → draft your application
- Search for news → navigate to the article → read the full text

---

## About

Built by [Sypnose](https://github.com/sypnose-cloud). MIT License.
