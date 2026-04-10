# Sypnose Navigator — Browser + Search for Claude

One agent. Two superpowers: Claude navigates the web AND searches in real time — at the same time, in the same conversation.

Like Perplexity Desktop, but for Claude. Free. Open source.

**No API key needed for browser. Brave Search free tier for search (2,000/month).**

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose
```

Claude installs both capabilities automatically.

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

## Config (copy-paste ready)

**Claude Desktop** — paste into your config file:

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
    },
    "search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your-key-here"
      }
    }
  }
}
```

Replace `PATH_TO_YOUR_PROFILE`:
- Windows: `C:\Users\YourName\sypnose-browser`
- Mac/Linux: `/home/yourname/.sypnose-browser`

Get a free Brave Search API key at [brave.com/search/api](https://brave.com/search/api).

**Claude Code:**
```bash
claude mcp add browser -- npx -y @playwright/mcp --browser chromium --user-data-dir ~/.sypnose-browser
BRAVE_API_KEY=your-key claude mcp add search -- npx -y @modelcontextprotocol/server-brave-search
```

---

## Difference from agent-free

| | agent-free | agent-sypnose |
|--|-----------|--------------|
| Browser navigation | ✅ | ✅ |
| Web search | basic (via Google) | ✅ real-time API |
| Persistent sessions | optional | ✅ default |
| Both at once | ❌ | ✅ |

---

## About

Built by [Sypnose](https://github.com/sypnose-cloud). MIT License.
