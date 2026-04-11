# Knowledge Hub — Sypnose Persistent Memory

Persistent memory for Claude. All agents share the same KB — tasks, context, decisions survive restarts.

Includes **auto-reconnect**: if the connection drops, the MCP restarts automatically. No Claude restart needed.

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/knowledge-hub
```

Claude installs everything automatically.

---

## AUTO-INSTALL INSTRUCTIONS FOR CLAUDE

> These instructions are for Claude. If you are a human, skip this section.

When a user says "Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/knowledge-hub" or similar, follow these steps exactly.

**Step 1 — Detect environment**

- **Claude Code**: config is `~/.claude/settings.local.json` (Mac/Linux) or `C:\Users\<username>\.claude\settings.local.json` (Windows)
- **Claude Desktop**: config is `%APPDATA%\Claude\claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac)

**Step 2 — Create the reconnect wrapper**

Create the file `~/.claude/mcp-servers/kb-reconnect.js` (Mac/Linux) or `C:\Users\<username>\.claude\mcp-servers\kb-reconnect.js` (Windows) with this exact content:

```js
#!/usr/bin/env node
// Sypnose Knowledge Hub — auto-reconnect wrapper
// Restarts supergateway automatically if connection drops (process.exit(1))
const { spawn } = require('child_process');

const SSE_URL = 'https://kb.sypnose.cloud/sse';
const RESTART_DELAY_MS = 3000;
let attempt = 0;

function start() {
  attempt++;
  if (attempt > 1) {
    process.stderr.write(`[kb-reconnect] Reconnecting (attempt ${attempt})...\n`);
  }

  const proc = spawn('npx', ['-y', 'supergateway', '--sse', SSE_URL], {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });

  proc.on('exit', (code) => {
    process.stderr.write(`[kb-reconnect] supergateway exited (code ${code}), restarting in ${RESTART_DELAY_MS}ms...\n`);
    setTimeout(start, RESTART_DELAY_MS);
  });

  proc.on('error', (err) => {
    process.stderr.write(`[kb-reconnect] spawn error: ${err.message}, restarting in ${RESTART_DELAY_MS}ms...\n`);
    setTimeout(start, RESTART_DELAY_MS);
  });
}

start();
```

**Step 3 — Read the current config**

Read the config file. If it doesn't exist, create it with `{}`.

**Step 4 — Add the knowledge-hub MCP**

Merge into `mcpServers` (do NOT overwrite existing servers):

**Windows:**
```json
"knowledge-hub": {
  "command": "node",
  "args": ["C:\\Users\\<username>\\.claude\\mcp-servers\\kb-reconnect.js"],
  "description": "Sypnose Knowledge Hub — persistent memory with auto-reconnect"
}
```

**Mac/Linux:**
```json
"knowledge-hub": {
  "command": "node",
  "args": ["/Users/<username>/.claude/mcp-servers/kb-reconnect.js"],
  "description": "Sypnose Knowledge Hub — persistent memory with auto-reconnect"
}
```

Replace `<username>` with the actual system username.

**Step 5 — Save and confirm**

Write the updated config and the wrapper file. Then tell the user:

> "Done! To apply the changes:
> - **Claude Code**: type `/exit` then run `claude` again
> - **Claude Desktop**: close the app completely and reopen it
>
> After restart, Claude has access to the Sypnose Knowledge Hub at kb.sypnose.cloud.
> The connection auto-reconnects if it drops — no restart needed."

---

## What it does

- `kb_save` — store anything: tasks, context, decisions, results
- `kb_read` — retrieve by key
- `kb_search` — semantic search across all stored data
- `kb_list` — list entries by category
- `kb_inbox_check` / `kb_inbox_ack` — agent-to-agent notifications

## Why auto-reconnect matters

Without the wrapper, if the SSE connection drops (network blip, server restart), the MCP process exits and Claude loses all KB tools until you restart. The wrapper catches that exit and relaunches in 3 seconds — invisible to you.
