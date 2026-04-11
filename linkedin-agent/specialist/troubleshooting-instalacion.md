# Troubleshooting — Instalación MCPs LinkedIn Agent

Errores encontrados en instalación real (Abril 2026) y soluciones.

## Error 1 — MCPs en settings.local.json no aparecen como tools

**Síntoma:** Añades `mcpServers` a `.claude/settings.local.json`, reinicias Claude, pero las tools del MCP no aparecen.

**Causa:** Claude Code NO auto-registra MCPs de `settings.local.json`. Necesitan registrarse via CLI.

**Solución:**
```bash
claude mcp add browser-agent npx -- -y @playwright/mcp@latest --browser chrome
claude mcp add playwright npx -- -y @playwright/mcp@latest --cdp-endpoint http://localhost:9222
```
Esto escribe en `~/.claude.json` (no en settings.local.json) y sí conecta.

---

## Error 2 — enabledMcpjsonServers no activa MCPs de settings

**Síntoma:** Añades el nombre del MCP a `enabledMcpjsonServers` esperando que se active.

**Causa:** `enabledMcpjsonServers` es para MCPs definidos en `.mcp.json` (archivos de proyecto), NO para los de `mcpServers` en settings.

**Solución:** Usar `claude mcp add` (ver Error 1). `enabledMcpjsonServers` solo se usa si tienes un `.mcp.json` en el repo.

---

## Error 3 — MCP browser-agent: binario no encontrado

**Síntoma:** Al instalar `@sypnose/browser-agent` desde el repo local, el script `bin/start.js` falla buscando `mcp-server-playwright` que no existe.

**Causa:** El nombre del binario cambió en versiones recientes de `@playwright/mcp`. Ahora se llama `playwright-mcp`, no `mcp-server-playwright`.

**Solución:** No usar el wrapper `@sypnose/browser-agent`. Usar directamente:
```bash
claude mcp add browser-agent npx -- -y @playwright/mcp@latest --browser chrome
```

---

## Error 4 — MCP antiguo "browser" con Chromium redundante

**Síntoma:** Tenías `browser` MCP con `--browser chromium --user-data-dir` que ya no sirve.

**Causa:** `browser-agent` con `--browser chrome` lo reemplaza completamente con Chrome real.

**Solución:** Eliminar entrada `browser` de `settings.local.json`. Solo necesitas:
- `playwright` → LinkedIn con CDP
- `browser-agent` → navegación libre con Chrome

---

## Error 5 — Write tool falla en archivos no leídos previamente

**Síntoma:** Al intentar crear archivos nuevos con el tool `Write`, falla con "File has not been read yet".

**Causa:** El tool `Write` exige haber leído el archivo previamente, incluso si no existe.

**Solución:** Usar `Bash` con heredoc para crear archivos nuevos:
```bash
cat > /ruta/archivo.md << 'ENDOFFILE'
contenido
