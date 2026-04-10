# Instalación MCP — LinkedIn Agent Sypnose

Configuración exacta de MCPs para el agente LinkedIn. Añadir a `.claude/settings.local.json`.

## Configuración completa (copiar tal cual)

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest", "--cdp-endpoint", "http://localhost:9222"]
    },
    "browser-agent": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest", "--browser", "chrome"]
    },
    "knowledge-hub": {
      "command": "npx",
      "args": ["-y", "supergateway", "--sse", "http://localhost:18793/sse"]
    }
  }
}
```

## Los 3 MCPs explicados

| MCP | Browser | Cuándo usar |
|-----|---------|-------------|
| `playwright` | Tu Chrome con CDP | LinkedIn con sesión activa (posts, conexiones, mensajes) |
| `browser-agent` | Chrome limpio | Investigar cualquier URL, news, empresas, perfiles públicos |
| `knowledge-hub` | — | Memoria persistente Sypnose (requiere SSH tunnel) |

## playwright — Chrome CDP (LinkedIn automation)

Requiere Chrome abierto con debug port **antes** de iniciar Claude:

```bat
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="C:\Users\carlo\chrome-debug-profile"
```

Verificar que está activo:
```bash
curl http://localhost:9222/json/version
```

Usar para: `linkedin-connect`, `content-posts`, `connections-optimizer`

## browser-agent — Chrome real (navegación Perplexity-style)

Sin prerequisitos. Claude abre Chrome automáticamente cuando lo necesita.

```json
"browser-agent": {
  "command": "npx",
  "args": ["-y", "@playwright/mcp@latest", "--browser", "chrome"]
}
```

Usar para: `deep-research`, `data-scraper-agent`, `exa-search`, investigar empresas y personas

**Diferencia con Chromium:** usa tu Chrome instalado → más compatible con sitios que detectan bots, acceso a extensiones instaladas.

## knowledge-hub — Memoria Sypnose (opcional)

Requiere SSH tunnel al servidor Sypnose activo:

```bash
ssh -L 18793:localhost:18793 -p $SYPNOSE_SSH_PORT $SYPNOSE_SSH_USER@$SYPNOSE_SSH_HOST -N &
```

Sin el tunnel, Claude funciona igual pero sin memoria persistente entre sesiones.

## MCPs opcionales (alta prioridad)

### Exa — búsqueda neural
```json
"exa": {
  "command": "npx",
  "args": ["-y", "@exa-labs/exa-mcp-server"],
  "env": { "EXA_API_KEY": "tu_key_aqui" }
}
```
API key gratis en exa.ai (1000 búsquedas/mes). Usar con: `exa-search`, `deep-research`

### X API — Twitter/X
```json
"x-api": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-twitter"],
  "env": {
    "TWITTER_API_KEY": "...",
    "TWITTER_API_SECRET": "...",
    "TWITTER_ACCESS_TOKEN": "...",
    "TWITTER_ACCESS_TOKEN_SECRET": "..."
  }
}
```
Keys en developer.twitter.com (Basic: $100/mes). Alternativa gratis: `browser-agent` → twitter.com

### Canva, Figma, Gmail, Calendar
MCPs nativos de Claude AI — no requieren instalación. Activar en claude.ai/settings.
