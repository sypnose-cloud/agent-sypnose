#!/usr/bin/env node
// @sypnose/browser-agent — Playwright MCP with Chrome + auto-reconnect
// Handles orphaned Chrome profile lock on crash
const { spawn, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

// Dedicated profile — never conflicts with user's personal Chrome
const DEFAULT_PROFILE = path.join(os.homedir(), 'sypnose-browser');
const RESTART_DELAY_MS = 8000; // Chrome needs ~5-8s to fully release the profile lock
let attempt = 0;

function killOrphanedChrome(profileDir) {
  // Only kill Chrome processes holding THIS specific profile, not all Chrome
  try {
    if (process.platform === 'win32') {
      // Check if profile SingletonLock exists — means Chrome is still running with this profile
      const lockFile = path.join(profileDir, 'Default', 'SingletonLock');
      if (fs.existsSync(lockFile)) {
        process.stderr.write(`[browser-agent] Profile lock detected, waiting for Chrome to release...\n`);
      }
    }
  } catch (e) {}
}

function getBin() {
  const newBin = path.resolve(__dirname, '../node_modules/.bin/playwright-mcp');
  const oldBin = path.resolve(__dirname, '../node_modules/.bin/mcp-server-playwright');
  if (fs.existsSync(newBin)) return newBin;
  if (fs.existsSync(oldBin)) return oldBin;
  return null;
}

function start() {
  attempt++;
  if (attempt > 1) {
    process.stderr.write(`[browser-agent] Reconnecting (attempt ${attempt}) in ${RESTART_DELAY_MS/1000}s...\n`);
    killOrphanedChrome(DEFAULT_PROFILE);
  }

  const bin = getBin();
  const cmd = bin || 'npx';
  const baseArgs = bin ? [] : ['-y', '@playwright/mcp@latest'];

  // Always use dedicated profile to avoid conflicts with user's Chrome
  const userArgs = process.argv.slice(2);
  const hasProfileArg = userArgs.includes('--user-data-dir');
  const profileArgs = hasProfileArg ? [] : ['--user-data-dir', DEFAULT_PROFILE];

  const args = [...baseArgs, '--browser', 'chrome', ...profileArgs, ...userArgs];

  const proc = spawn(cmd, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });

  proc.on('exit', (code) => {
    if (code === 0) process.exit(0); // clean exit, don't restart
    process.stderr.write(`[browser-agent] crashed (code ${code}), restarting in ${RESTART_DELAY_MS/1000}s...\n`);
    setTimeout(start, RESTART_DELAY_MS);
  });

  proc.on('error', (err) => {
    process.stderr.write(`[browser-agent] error: ${err.message}, restarting in ${RESTART_DELAY_MS/1000}s...\n`);
    setTimeout(start, RESTART_DELAY_MS);
  });
}

start();
