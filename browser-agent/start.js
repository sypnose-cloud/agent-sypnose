#!/usr/bin/env node
// @sypnose/browser-agent — Playwright MCP with Chrome + auto-reconnect
// Note: binary renamed from mcp-server-playwright to playwright-mcp in @playwright/mcp >= 0.0.60
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const RESTART_DELAY_MS = 3000;
let attempt = 0;

function getBin() {
  const newBin = path.resolve(__dirname, '../node_modules/.bin/playwright-mcp');
  const oldBin = path.resolve(__dirname, '../node_modules/.bin/mcp-server-playwright');
  if (fs.existsSync(newBin)) return newBin;
  if (fs.existsSync(oldBin)) return oldBin;
  // fallback: use npx
  return null;
}

function start() {
  attempt++;
  if (attempt > 1) {
    process.stderr.write(`[browser-agent] Reconnecting (attempt ${attempt})...\n`);
  }

  const bin = getBin();
  const cmd = bin || 'npx';
  const baseArgs = bin ? [] : ['-y', '@playwright/mcp@latest'];
  const args = [...baseArgs, '--browser', 'chrome', ...process.argv.slice(2)];

  const proc = spawn(cmd, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });

  proc.on('exit', (code) => {
    // code 0 = clean exit (user closed), don't restart
    if (code === 0) {
      process.exit(0);
    }
    process.stderr.write(`[browser-agent] exited (code ${code}), restarting in ${RESTART_DELAY_MS}ms...\n`);
    setTimeout(start, RESTART_DELAY_MS);
  });

  proc.on('error', (err) => {
    process.stderr.write(`[browser-agent] spawn error: ${err.message}, restarting in ${RESTART_DELAY_MS}ms...\n`);
    setTimeout(start, RESTART_DELAY_MS);
  });
}

start();
