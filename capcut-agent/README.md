# CapCut Agent — Video Creation for Claude

Let Claude create and edit videos in CapCut. Add clips, images, text, music, transitions — all from a conversation.

**Works with CapCut Web (capcut.com). Free.**

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-free
```

Requires the [browser-agent](../browser-agent) — install it first.

---

## What Claude can do

- Open CapCut Web and create a new project
- Upload video clips and images
- Add text overlays and titles
- Set transitions between clips
- Add background music
- Export the finished video

---

## Usage

```
"Open CapCut and create a 30-second video with these 3 images: [paths]"
"Add a title 'My Product Launch' to my CapCut project"
"Export the current CapCut project as MP4"
"Add background music to my video at 30% volume"
```

---

## Requirements

- [browser-agent](../browser-agent) installed and configured
- CapCut account (free at capcut.com)
- Log in to CapCut once — browser-agent remembers your session

---

## Config

Uses the same browser-agent config. No additional setup needed.

Make sure your browser-agent uses `--user-data-dir` so your CapCut login is saved:

```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": [
        "-y", "@playwright/mcp",
        "--browser", "chromium",
        "--user-data-dir", "C:\\Users\\YourName\\claude-browser"
      ]
    }
  }
}
```
