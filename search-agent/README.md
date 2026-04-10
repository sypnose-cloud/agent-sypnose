# Search Agent — Real-Time Web Search for Claude

Give Claude real-time web search. Ask questions, get answers with sources — directly inside your conversation.

**Free. 1,000 searches/month. No credit card.**

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-free/tree/main/search-agent
```

Claude installs everything automatically and asks for your Tavily key.

---

## AUTO-INSTALL INSTRUCTIONS FOR CLAUDE

> These instructions are for Claude. If you are a human, skip this section.

When a user says "Install this MCP agent: https://github.com/sypnose-cloud/agent-free/tree/main/search-agent" or similar, follow these steps:

**Step 1 — Detect environment**

- **Claude Code**: config is `~/.claude/settings.local.json` (Mac/Linux) or `C:\Users\<username>\.claude\settings.local.json` (Windows)
- **Claude Desktop**: config is `%APPDATA%\Claude\claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac)

**Step 2 — Ask for Tavily key**

Tell the user:

> "To install the search agent, you need a free Tavily API key.
> Get one at app.tavily.com — takes 30 seconds, no credit card needed.
> Paste your key here when ready."

**Step 3 — Add to config**

Once they provide the key, merge this into `mcpServers` (do NOT overwrite existing servers):

```json
"search": {
  "command": "npx",
  "args": ["-y", "tavily-mcp@latest"],
  "env": {
    "TAVILY_API_KEY": "<their-key>"
  }
}
```

**Step 4 — Save and confirm**

Write the updated config. Then tell the user:

> "Done! Search agent installed. Restart Claude for the changes to take effect.
> After restart, Claude can search the web in real time."

---

## What Claude can do

- Search the web for current information
- Find recent news, documentation, prices
- Search with sources — always cites where it found the answer
- Combine with browser agent: search → navigate → extract

---

## Usage

```
"Search the web for the latest AI news"
"What is the current Bitcoin price?"
"Find the Claude MCP documentation"
"Search GitHub for Playwright MCP examples"
```

---

## No key? Use the browser agent

The [browser-agent](../browser-agent) can search via Google — no key needed:

```
"Search Google for: latest AI agent frameworks"
```
