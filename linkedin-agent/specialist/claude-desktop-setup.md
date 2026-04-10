# Cómo dar estos poderes a Claude Desktop

Claude Desktop usa el mismo sistema de MCPs. Solo cambia dónde está el archivo de config.

## Archivo de configuración

**Windows:**
```
%APPDATA%\Claude\claude_desktop_config.json
```
→ Normalmente: `C:\Users\[TU_USUARIO]\AppData\Roaming\Claude\claude_desktop_config.json`

**Mac:**
```
~/Library/Application Support/Claude/claude_desktop_config.json
```

## Configuración completa para Claude Desktop

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
    },
    "exa": {
      "command": "npx",
      "args": ["-y", "@exa-labs/exa-mcp-server"],
      "env": { "EXA_API_KEY": "tu_key_aqui" }
    }
  }
}
```

## Cómo instalar

1. Cerrar Claude Desktop completamente
2. Abrir el archivo `claude_desktop_config.json` (crearlo si no existe)
3. Pegar la config de arriba (ajustar con tus keys)
4. Guardar
5. Reabrir Claude Desktop

## Diferencia Claude Desktop vs Claude Code

| | Claude Desktop | Claude Code (CLI) |
|--|--------------|-------------------|
| Config | `claude_desktop_config.json` | `.claude/settings.local.json` |
| Skills | NO soporta skills nativas | SÍ soporta `/skill` |
| CLAUDE.md | NO carga automáticamente | SÍ carga del directorio |
| Uso | Chat conversacional | Agente técnico |

**Para tener las skills en Claude Desktop:**
Copia el contenido de los `.md` de `specialist/` directamente en el System Prompt
de Claude Desktop (Settings → Custom instructions).

## Skills más útiles para Claude Desktop (pegar en System Prompt)

Pegar el contenido de estos archivos en Custom Instructions:
- `skill-brand-voice.md` — siempre hablar como tú
- `skill-linkedin-growth.md` — reglas del algoritmo
- `skill-daily.md` — rutina del agente
- `skill-boris.md` — leyes de calidad

Claude Desktop no ejecuta skills automáticamente, pero con el contenido
en System Prompt se comporta como si las tuviera.
