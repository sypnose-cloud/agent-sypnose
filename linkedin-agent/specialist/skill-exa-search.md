# skill: exa-search

## Overview
Búsqueda neural via Exa MCP. A diferencia de búsqueda por keywords, Exa entiende semántica y devuelve resultados de alta calidad para investigación de personas, empresas, tendencias técnicas y contenido de competidores.

## Cuándo activar
- En investigación de prospectos (deep-research)
- Al buscar contenido técnico sobre un tema para un post
- Al analizar competidores de Sypnose
- Cuando WebSearch nativo no encuentra resultados precisos

## MCPs requeridos
```json
{
  "exa": {
    "command": "npx",
    "args": ["-y", "@exa-labs/exa-mcp-server"],
    "env": { "EXA_API_KEY": "$EXA_API_KEY" }
  }
}
```
Ver config.json para instalación completa.

## Herramientas disponibles
```
exa_search         → búsqueda semántica por query
exa_find_similar   → encontrar páginas similares a una URL
exa_get_contents   → obtener contenido completo de URLs
```

## Casos de uso y queries

### Investigación de persona
```
exa_search:
  query: "[Nombre Apellido] AI agents OR LLM OR orchestration"
  type: "neural"
  num_results: 5

exa_find_similar:
  url: "[linkedin_url_del_prospecto]"
  → Encuentra personas similares al prospecto
```

### Investigación de empresa
```
exa_search:
  query: "[Empresa] AI strategy OR machine learning OR LLM 2025 2026"
  type: "neural"
  num_results: 10

exa_search:
  query: "[Empresa] funding OR investment OR Series 2025"
  type: "keyword"
  num_results: 5
```

### Competidores de Sypnose
```
exa_search:
  query: "agent orchestration framework production 2026 LangGraph CrewAI"
  type: "neural"
  num_results: 10
  → Comparar con capacidades de Sypnose para contenido

exa_find_similar:
  url: "github.com/radelqui/sypnose"
  → Encontrar repos similares, medir posicionamiento
```

### Tendencias para posts
```
exa_search:
  query: "AI agents production challenges 2026"
  type: "neural"
  num_results: 10
  date_crawled_after: "2026-03-01"
  → Solo contenido reciente
```

### Artículos técnicos para referencia
```
exa_get_contents:
  urls: ["[URL_artículo]"]
  text: true
  → Extraer texto completo para analizar con Gemini Flash
```

## Ventajas vs WebSearch
| Capacidad | Exa | WebSearch nativo |
|-----------|-----|-----------------|
| Búsqueda semántica | Sí | No (keywords only) |
| Filtro por fecha | Sí | Limitado |
| Find similar pages | Sí | No |
| Contenido completo | Sí | Solo snippet |
| Calidad resultados | Alta | Media |
| Coste | API (bajo) | Gratis |

## Integración con otros skills
```
deep-research:     Paso 2 — enriquecimiento de perfil
lead-intelligence: Búsqueda de señales de buyer intent
content-engine:    Fuentes para posts técnicos
data-scraper-agent: Monitoreo de menciones de Sypnose
```

## Rate limits y coste
```
Exa API:
  Free tier:  1,000 búsquedas/mes
  Pro tier:   $5/1,000 búsquedas (muy bajo coste)
  
Meta de uso:
  ~10 búsquedas/día × 30 días = 300/mes (free tier suficiente)
  Usar gemini-2.5-flash para analizar resultados (gratis)
```

## Ejemplo completo (investigar prospecto)
```
Target: "Zdenek Nemec" (CTO Superface.ai)

1. exa_search("Zdenek Nemec Superface AI agents API")
   → Artículos publicados, entrevistas

2. exa_find_similar("linkedin.com/in/zdenek-nemec-cto")
   → Personas similares en el ecosistema

3. exa_get_contents(urls=[artículo_más_relevante])
   → Texto completo para analizar pain points

4. Output → deep-research síntesis
   → Pain point: "API integration complexity for AI agents"
   → Ángulo Sypnose: "741ms A2A elimina latencia de integración"
```
