# Browser + Search Agent — Navigate and Search for Claude

One install. Claude navigates the web AND searches in real time — at the same time.

**Free. No API key needed for browser. Optional Tavily key for real-time search.**

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/browser-agent
```

Claude reads this file and installs everything automatically.

---

## AUTO-INSTALL INSTRUCTIONS FOR CLAUDE

> These instructions are for Claude. If you are a human, skip this section.

When a user says "Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/browser-agent" or similar, follow these steps:

**Step 1 — Detect environment**

- If running as **Claude Code** (CLI): config file is `~/.claude/settings.local.json` on Mac/Linux, or `C:\Users\<username>\.claude\settings.local.json` on Windows. Use `echo $USERPROFILE` or `whoami` to find the username.
- If running as **Claude Desktop**: config file is `%APPDATA%\Claude\claude_desktop_config.json` on Windows, or `~/Library/Application Support/Claude/claude_desktop_config.json` on Mac.

**Step 2 — Read the current config**

Read the config file. If it doesn't exist, create it with `{}`.

**Step 3 — Create the browser-agent reconnect wrapper**

Create the file `~/.claude/mcp-servers/browser-reconnect.js` (Mac/Linux) or `C:\Users\<username>\.claude\mcp-servers\browser-reconnect.js` (Windows) with this exact content:

```js
#!/usr/bin/env node
// Sypnose browser-agent — auto-reconnect wrapper
// Restarts @playwright/mcp automatically if Chrome crashes or CDP disconnects
const { spawn } = require('child_process');

const RESTART_DELAY_MS = 3000;
let attempt = 0;

function start() {
  attempt++;
  if (attempt > 1) {
    process.stderr.write(`[browser-agent] Reconnecting (attempt ${attempt})...\n`);
  }

  const args = ['-y', '@playwright/mcp@latest', '--browser', 'chrome', ...process.argv.slice(2)];

  const proc = spawn('npx', args, {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });

  proc.on('exit', (code) => {
    if (code === 0) process.exit(0); // clean exit, don't restart
    process.stderr.write(`[browser-agent] exited (code ${code}), restarting in ${RESTART_DELAY_MS}ms...\n`);
    setTimeout(start, RESTART_DELAY_MS);
  });

  proc.on('error', (err) => {
    process.stderr.write(`[browser-agent] error: ${err.message}, restarting in ${RESTART_DELAY_MS}ms...\n`);
    setTimeout(start, RESTART_DELAY_MS);
  });
}

start();
```

**Step 4 — Add the MCP servers**

Merge this into the `mcpServers` section (do NOT overwrite existing servers):

**Windows:**
```json
"browser-agent": {
  "command": "node",
  "args": ["C:\\Users\\<username>\\.claude\\mcp-servers\\browser-reconnect.js"],
  "description": "Chrome browser with auto-reconnect"
}
```

**Mac/Linux:**
```json
"browser-agent": {
  "command": "node",
  "args": ["/Users/<username>/.claude/mcp-servers/browser-reconnect.js"],
  "description": "Chrome browser with auto-reconnect"
}
```

Replace `<username>` with the actual system username.

For persistent login (recommended), add `--user-data-dir <path>` at the end of the args array.

**Step 5 — Save and confirm**

Write the updated config and the wrapper file. Then tell the user:

> "Done! To apply the changes:
> - **Claude Code**: type `/exit` then run `claude` again
> - **Claude Desktop**: close the app completely and reopen it
>
> After restart, Claude can navigate any website. If Chrome crashes, it reconnects automatically in 3 seconds."

---

## What Claude can do

**Search**
- Real-time web search with sources
- Current news, prices, docs
- Any question that needs live data

**Navigate**
- Open any website and interact with it
- Log in to services and stay logged in
- Fill forms, click, extract content, take screenshots

**Both together**
- Search → navigate to the result → extract and summarize
- Find a company → go to their careers page → draft your application
- Search for news → navigate to the article → read the full text

---

## Manual config (if you prefer)

**Claude Desktop** — paste into your config file:

| OS | Config file |
|----|-------------|
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |

```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp", "--browser", "chrome"]
    },
    "search": {
      "command": "npx",
      "args": ["-y", "tavily-mcp@latest"],
      "env": {
        "TAVILY_API_KEY": "your-key-here"
      }
    }
  }
}
```

Get a free Tavily API key at [app.tavily.com](https://app.tavily.com) — 1,000 searches/month, no credit card needed.

**No key?** Claude can still search via Google through the browser. Just skip the search block.

**Claude Code:**
```bash
claude mcp add browser -- npx -y @playwright/mcp --browser chrome
```

---

## Persistent login (optional)

Add `--user-data-dir` to remember your logins:

```json
"args": ["-y", "@playwright/mcp", "--browser", "chrome", "--user-data-dir", "C:\\Users\\YourName\\claude-browser"]
```

Log in once to LinkedIn, Gmail, GitHub — Claude remembers forever.
