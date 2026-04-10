# skill: deep-research

## Overview
Investigación profunda multi-fuente sobre personas, empresas, tendencias AI, o competidores. Combina múltiples MCPs en secuencia para construir un perfil completo antes de tomar decisiones de outreach o contenido.

## Cuándo activar
- Antes de contactar a un HOT prospect (investigar antes de hablar)
- Al preparar un post sobre una empresa o persona específica
- Al evaluar una empresa como cliente potencial
- Al analizar un competidor de Sypnose

## Fuentes por prioridad
```
1. LinkedIn (playwright MCP)     → perfil público, posts recientes, empresa
2. Exa MCP (exa-search)         → artículos, menciones, búsqueda semántica
3. WebSearch nativo              → noticias recientes, anuncios
4. GitHub (WebFetch)             → si es técnico, ver repos y contribuciones
5. X/Twitter (x-api)            → actividad reciente, followers, tono
6. Company website (WebFetch)   → stack técnico, caso de uso, equipo
```

## Proceso de investigación de persona
```
INPUT: Nombre + LinkedIn URL

Paso 1 — LinkedIn scan (playwright MCP):
  - Ver perfil completo: cargo actual, experiencia, educación
  - Posts recientes (últimos 3): tema, engagement, comentarios
  - Conexiones en común con Carlos
  - Empresa actual: tamaño, industria, stage

Paso 2 — Exa enrichment:
  exa.search("[nombre] [empresa] AI agents")
  → Artículos donde aparece como autor o entrevistado
  → Conferencias, papers, podcasts
  → Opiniones públicas sobre AI/agentes

Paso 3 — GitHub scan (si es técnico):
  github.com/[handle] → repos públicos, lenguajes, contribuciones
  Buscar: repos relacionados con agentes, LLMs, orquestación

Paso 4 — X scan (x-api):
  → Handle de Twitter
  → Últimos 20 tweets sobre AI
  → ¿Sigue a Carlos o @sypnose?

Paso 5 — Síntesis:
  → Pain point principal inferido
  → Ángulo de Sypnose más relevante para esa persona
  → Warm path disponible (social-graph-ranker)
  → Borrador de mensaje de outreach
```

## Proceso de investigación de empresa
```
INPUT: Nombre empresa + URL

Paso 1 — Website (WebFetch):
  - Tech stack mencionado (integrations, API docs)
  - Casos de uso AI si los hay
  - Team page: quién lidera AI/ML
  - Job postings: ¿están contratando AI engineers?

Paso 2 — LinkedIn company (playwright MCP):
  - Número empleados y crecimiento
  - Posts recientes de la página
  - Personas clave: CTO, Head of AI, VP Eng

Paso 3 — Exa company research:
  exa.search("[empresa] AI strategy funding 2025 2026")
  → Noticias de funding rounds
  → Anuncios de productos AI
  → Tecnologías mencionadas en prensa

Paso 4 — GitHub (si es tech company):
  github.com/[empresa] → repos públicos, uso de LLMs/agentes

Paso 5 — Síntesis:
  → ¿Están usando o evaluando agent orchestration?
  → ¿Cuál es su pain point actual?
  → ¿Cómo encaja Sypnose en su stack?
  → Score como cliente potencial (0-10)
```

## Output estándar
```markdown
# Research: [Nombre/Empresa]
Fecha: YYYY-MM-DD

## Perfil rápido
- Rol: [cargo]
- Empresa: [empresa], [stage], [empleados]
- Ubicación: [ciudad, país]

## Pain points detectados
- [pain point 1 con evidencia]
- [pain point 2 con evidencia]

## Señales de buyer intent
- [señal concreta — ej: "publicó sobre limitaciones de LangChain hace 5 días"]

## Ángulo Sypnose
[Cómo encaja Sypnose en su problema específico — 2-3 frases]

## Warm path
- Tier [1/2/3] — B-score: [X.X]
- Vía: [mutual o cold]

## Borrador outreach
[Mensaje de 3-4 líneas listo para enviar]

## Fuentes consultadas
- LinkedIn: [URL]
- Exa: [queries usadas]
- X: [@handle]
```

## Reglas de investigación
```
OBLIGATORIO antes de contactar a cualquier HOT:
  □ ¿Verificado perfil LinkedIn activo (post en últimas 2 semanas)?
  □ ¿Pain point identificado con evidencia concreta?
  □ ¿Warm path evaluado?
  □ ¿Borrador de mensaje listo?

PROHIBIDO:
  - Contactar sin investigar (Boris: sin evidencia no existe)
  - Usar datos desactualizados (>30 días) para outreach
  - Asumir pain points sin evidencia pública
```

## Tiempo estimado por investigación
```
Persona HOT:     15-20 min (todos los pasos)
Empresa cliente: 30-45 min (análisis completo)
News/tendencia:  5-10 min (Exa + WebSearch)
```
