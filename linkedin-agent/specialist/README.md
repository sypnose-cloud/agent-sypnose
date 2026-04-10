# LinkedIn Specialist Arsenal — Sypnose
Arsenal completo del agente LinkedIn de Carlos De La Torre. En producción desde abril 2026.

## MCPs instalados
| MCP | Comando | Para qué |
|-----|---------|----------|
| `playwright` | `@playwright/mcp --cdp-endpoint localhost:9222` | Chrome con sesión LinkedIn activa |
| `browser` | `@playwright/mcp --browser chromium --user-data-dir` | Chromium fresco fallback |
| `knowledge-hub` | `supergateway --sse localhost:18793` | Memoria persistente Sypnose |
| `canva` | Claude AI Canva MCP | Imágenes, carruseles, banners LinkedIn |
| `figma` | Claude AI Figma MCP | Diseño avanzado |
| `gmail` | Claude AI Gmail MCP | Outreach por email |
| `google-calendar` | Claude AI Google Calendar MCP | Follow-ups, scheduling |

## Skills disponibles
| Skill | Qué hace |
|-------|---------|
| `linkedin-connect` | Auto-connect CDP, 100/día, España+LATAM |
| `linkedin-growth` | Estrategia algoritmo 2026, formatos, métricas |
| `sypnose-linkedin` | Pilares contenido Sypnose, acciones diarias |
| `content-engine` | Contenido multi-plataforma sin genéricos |
| `brand-voice` | Perfil voz Carlos De La Torre |
| `crosspost` | Distribución X, LinkedIn, Threads, Bluesky |
| `lead-intelligence` | Pipeline prospección: scoring + warm paths |
| `connections-optimizer` | Optimizar red, pruning, expansión |
| `social-graph-ranker` | Scoring matemático grafo social |
| `data-scraper-agent` | Scraper Gemini Flash + GitHub Actions |
| `deep-research` | Investigación profunda multi-fuente |
| `exa-search` | Búsqueda neural Exa MCP |
| `x-api` | API X/Twitter: posting, search, analytics |
| `daily` | Rutina diaria del agente |

## Flujos en producción
- CDP auto-connect: 100 conexiones/día (Mar+Apr 2026, 0 errores)
- Posts con imágenes: 2 publicados, 74+ impressions
- Engagement: 4 posts virales comentados (Pascal Bornet 354 reactions, etc.)
- Contactos: 441+ investigados en data/*.json
- Aplicaciones empleo: 6 via CDP (Cohere, Hopper, OLX, Axiomatic, etc.)

## Arquitectura
```
Chrome CDP (localhost:9222)
  └── playwright MCP → LinkedIn automation

Content Stack
  ├── content-engine + brand-voice
  ├── canva MCP (imágenes marca Sypnose)
  └── crosspost (multi-plataforma)

Research Stack
  ├── exa-search + deep-research
  └── data-scraper-agent (monitoreo continuo)
```
