# skill: data-scraper-agent

## Overview
Agente de scraping para monitoreo continuo de prospectos, noticias AI, y tendencias del mercado. Combina Gemini Flash (contexto largo, gratis) con GitHub Actions para automatización sin servidor. Evidencia en todos los outputs.

## Cuándo activar
- Al buscar nuevos contactos en bulk (>50 perfiles)
- Al monitorear tendencias diarias de AI (#AIAgents, #Claude)
- Al analizar posts virales para encontrar ángulos de contenido
- Al hacer due diligence de una empresa objetivo

## Arquitectura
```
Trigger (manual o cron) → Gemini Flash 2.5 (análisis) → Output JSON
     ↓
     ├── LinkedIn profiles → data/contactos_nuevos_*.json
     ├── News feeds       → data/noticias.json
     └── Post analytics   → data/metricas.json
```

## Modelos usados (por coste)
```
Análisis de perfiles bulk:  gemini-2.5-flash (GRATIS, contexto 1M tokens)
Análisis noticias:          gemini-2.0-flash (GRATIS, más rápido)
Enriquecimiento perfiles:   perplexity sonar-pro (búsqueda web real)
Redacción outputs:          Claude Sonnet 4.6 (solo si calidad crítica)
```
**Meta: 80%+ del proceso con modelos gratuitos.**

## Tipos de scraping

### 1. LinkedIn people search (playwright MCP)
```python
# Palabras clave de búsqueda
queries = [
    "AI Orchestration Spain",
    "Head of AI LATAM",
    "CTO startup AI Madrid",
    "LLM Engineer Barcelona",
    "Multi-agent systems",
    "Claude MCP developer"
]

# Por cada query:
# 1. playwright → linkedin.com/search/results/people/?keywords=[query]
# 2. Extraer: nombre, rol, empresa, URL, resumen
# 3. Aplicar scoring (connections-optimizer)
# 4. Guardar en data/contactos_nuevos_YYYY-MM-DD.json
```

### 2. News monitoring (WebSearch)
```
Frecuencia:  1x/día (rutina daily)
Queries:
  - "Claude Anthropic news today"
  - "AI agents production 2026"
  - "multi-agent orchestration"
  - "LLM inference cost reduction"
  - site:anthropic.com

Output: data/noticias.json con:
  - título, URL, fecha, resumen, ángulo para post
  - relevancia_sypnose: alta/media/baja
```

### 3. Viral post scanner (playwright MCP)
```
Frecuencia:  1x/día (9:00 RD)
Proceso:
  1. LinkedIn feed → buscar #AIAgents posts >50 reactions
  2. Extraer: autor, URL, texto preview, reaction count
  3. Seleccionar 5 mejores para comentar
  4. Guardar en data/viral_posts_today.json

Output usado por: rutina daily → comentar 5 posts
```

### 4. Company research (Exa + Perplexity)
```
Trigger: cuando se identifica un HOT prospect
Input:   nombre empresa + URL

Proceso:
  1. exa-search: buscar noticias recientes de la empresa
  2. perplexity sonar-pro: "Empresa X AI strategy funding team"
  3. LinkedIn company page (playwright): ver empleados, posts recientes
  4. Consolidar en data/company_research/empresa_YYYY-MM-DD.md

Output incluye:
  - Stack tecnológico público
  - Funding y stage
  - Iniciativas AI detectadas
  - Pain points inferidos
  - Ángulo de outreach sugerido
```

## Estructura outputs

### data/contactos_nuevos_YYYY-MM-DD.json
```json
[
  {
    "nombre": "Nombre",
    "rol": "CTO",
    "empresa": "Empresa AI",
    "linkedin_url": "linkedin.com/in/handle",
    "pais": "ES",
    "score": 8.5,
    "clasificacion": "HOT",
    "razon_hot": "Publicó sobre agent orchestration esta semana",
    "fecha_analisis": "2026-04-14",
    "status": "pending"
  }
]
```

### data/noticias.json
```json
[
  {
    "titulo": "Claude 4 lanzado con nuevas capacidades de agentes",
    "url": "https://anthropic.com/...",
    "fecha": "2026-04-15",
    "resumen": "...",
    "angulo_post": "Cómo Claude 4 cambia la orquestación en Sypnose",
    "relevancia_sypnose": "alta",
    "publicado": false
  }
]
```

## Reglas Boris para el scraper
```
Sin evidencia no existe:
  Todo scraping genera JSON verificable
  No reportar "100 contactos encontrados" sin el JSON

Verificación antes de usar datos:
  Si un dato crítico se usa en outreach → verificar manualmente
  Perfiles pueden ser desactualizados → ver fecha de último post

Rate limits:
  LinkedIn: max 100 acciones/día
  No scraping continuo sin pausa (detecta bots)
  GitHub Actions: gratis hasta 2000 min/mes
```

## Evidencia en producción
- data/contactos_nuevos_2026-04-10.json: 77 contactos
- data/contactos_nuevos_2026-04-14.json: 200+ contactos
- data/contactos_espana_latam_2026-04-14.json: España + LATAM separados
- data/contactos_us_uk_canada_2026-04-14.json: US/UK/Canada
- Total acumulado: 441+ contactos investigados
