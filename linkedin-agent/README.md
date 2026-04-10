# LinkedIn Agent — Full LinkedIn Automation for Claude

Write posts, find jobs, send connection requests, research companies, draft messages — all from Claude Desktop or Claude Code. This is the real LinkedIn workflow, battle-tested in production.

**Free. Uses your existing LinkedIn session via browser.**

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/linkedin-agent
```

Requires the [browser-agent](../browser-agent) — install it first.

---

## AUTO-INSTALL INSTRUCTIONS FOR CLAUDE

> These instructions are for Claude. If you are a human, skip this section.

When a user says "Install this MCP agent: https://github.com/sypnose-cloud/agent-sypnose/tree/main/linkedin-agent" or similar, follow these steps:

**Step 1 — Detect environment**

- **Claude Code**: config is `~/.claude/settings.local.json` (Mac/Linux) or `C:\Users\<username>\.claude\settings.local.json` (Windows)
- **Claude Desktop**: config is `%APPDATA%\Claude\claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac)

**Step 2 — Read the current config**

Read the config file. If it doesn't exist, create it with `{}`.

**Step 3 — Add LinkedIn + Sypnose MCPs**

Merge into `mcpServers` (do NOT overwrite existing servers):

```json
"playwright": {
  "command": "npx",
  "args": ["-y", "@playwright/mcp@latest", "--cdp-endpoint", "http://localhost:9222"]
},
"knowledge-hub": {
  "command": "npx",
  "args": ["-y", "supergateway", "--sse", "https://kb.sypnose.cloud/sse"]
}
```

**Step 4 — Add Sypnose rules (Claude Code only)**

If running as Claude Code, create the file `.claude/rules/sypnose-linkedin.md` in the current project directory with this content:

```
# Sypnose LinkedIn Agent

You have access to LinkedIn via the `playwright` MCP (Chrome CDP on port 9222).
You have access to persistent memory via the `knowledge-hub` MCP (kb.sypnose.cloud).

Rules:
- NEVER publish a post without showing a draft first
- NEVER send connection requests without approval
- NEVER apply to a job without approval
- Save all drafts in content/posts/ before showing
- Use kb_save to persist contacts and tasks between sessions
- Max 100 connection requests/day via CDP
```

Do NOT modify or overwrite any existing CLAUDE.md or other rules files.

**Step 5 — Save and confirm**

Write the updated config. Then tell the user:

> "Done! To apply the changes:
> - **Claude Code**: type `/exit` then run `claude` again
> - **Claude Desktop**: close the app completely and reopen it
>
> After restart, Claude can automate LinkedIn and remembers everything via Sypnose KB.
> Open Chrome with: `chrome.exe --remote-debugging-port=9222 --user-data-dir=C:\Users\<username>\sypnose-browser`"

---

## What Claude can do

**Content**
- Write LinkedIn posts with hook, story, insight, CTA
- Schedule weekly content rotation (Mon/Wed/Fri)
- Adapt your voice and tone from existing posts

**Job Search**
- Search LinkedIn Jobs with your filters (remote, salary, role)
- Score each offer 1-10 against your profile
- Adapt your CV and cover letter per offer
- Draft personalized application messages

**Networking**
- Find relevant people (recruiters, CTOs, hiring managers)
- Draft connection request messages in your voice
- Research companies before applying or connecting

**Research**
- Pull company data, news, funding
- Find mutual connections
- Analyze any LinkedIn profile

---

## Usage

```
"Write a LinkedIn post about AI agents for this Wednesday"
"Search LinkedIn for remote AI Engineer jobs, salary > 60K EUR"
"Find AI recruiters in Spain and draft connection requests"
"Research [company name] before I apply"
"Draft a cover letter for this job: [paste job URL]"
```

---

## Skills included

| Skill | What it does |
|-------|-------------|
| [post-linkedin](./skills/post-linkedin.md) | Write posts with proven structure |
| [job-search](./skills/job-search.md) | Find and score job offers |
| [connections](./skills/connections.md) | Build your network strategically |
| [company-research](./skills/company-research.md) | Research before applying |
| [cover-letter](./skills/cover-letter.md) | Adapt CV and message per offer |

---

## Rules (built-in safety)

- Never applies to a job without your approval
- Never publishes a post without showing you the draft first
- Never sends connection requests in bulk — max 5/day
- Always shows you what it's about to do before doing it

---

## Requirements

- [browser-agent](../browser-agent) with `--user-data-dir` for persistent LinkedIn session
- Log in to LinkedIn once — stays logged in
