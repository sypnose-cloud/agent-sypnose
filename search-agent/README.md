# Search Agent — Web Search for Claude

Give Claude real-time web search. Ask questions, get structured answers with sources — like Perplexity but inside your Claude conversation.

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose
```

The search agent is included automatically.

---

## What it does

- Search the web from inside Claude conversations
- Get answers with sources
- Search specific sites
- Find recent news and documentation

---

## Usage

Once installed, just ask Claude:

```
"Search the web for the latest Claude MCP updates"
"Find recent news about AI agents"
"Search docs.anthropic.com for tool use examples"
```

---

## Requirements

Needs a [Tavily API key](https://tavily.com) (free tier available — 1000 searches/month).

Add to your Claude config:

```json
{
  "mcpServers": {
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

Or use Brave Search API — also free tier available at [brave.com/search/api](https://brave.com/search/api).
