# skill: social-graph-ranker

## Overview
Scoring matemático del grafo social para identificar el camino más cálido hacia un prospecto. Combina análisis de distancia de conexión, actividad de nodos intermedios, y señales de buyer intent. Usa Exa MCP + X API para enriquecer datos fuera de LinkedIn.

## Cuándo activar
- Al evaluar si contactar a un HOT prospect
- Al buscar warm introductions antes de cold outreach
- Al priorizar entre múltiples HOTs similares

## Fórmula de scoring (B-score)
```
B(m) = Σ_t [w(t) · λ^(d(m,t)-1)]

Donde:
  m      = prospecto objetivo
  t      = conexiones de Carlos (primer nivel)
  w(t)   = peso del nodo t (actividad, rol, relación)
  λ      = 0.5 (decaimiento por grado de separación)
  d(m,t) = grados entre t y m

Interpretación:
  B > 0.8  → Tier 1: warm intro disponible, alto valor
  B 0.4-0.8 → Tier 2: conexión débil, posible intro
  B < 0.4  → Tier 3: cold outreach necesario
```

## Peso por tipo de nodo (w)
```
w(t) por actividad:
  Publicó en últimas 2 semanas:   1.0
  Publicó en último mes:          0.7
  Sin actividad reciente:         0.3

w(t) por rol:
  CTO/CEO/Founder:                1.5
  VP/Director/Head of:            1.2
  Senior Engineer/Lead:           1.0
  Otros:                          0.7

w(t) por relación con Carlos:
  Interactuó con posts de Carlos: 1.3
  Conexión directa activa:        1.0
  Conexión pasiva:                0.7
```

## Clasificación de tiers
| Tier | B-Score | Estrategia |
|------|---------|-----------|
| Tier 1 | >0.8 | Warm intro via mutual → máxima prioridad |
| Tier 2 | 0.4-0.8 | Intro débil o comentario en post común |
| Tier 3 | <0.4 | Cold outreach → skill lead-intelligence |

## Enriquecimiento cross-platform
```
LinkedIn (playwright MCP):
  - Conexiones mutuas visibles en perfil
  - Posts recientes y engagement

Exa MCP (exa-search skill):
  - Artículos publicados por el prospecto
  - Menciones en foros técnicos
  - Podcast appearances, conferencias

X API (x-api skill):
  - ¿Sigue a Carlos o a Sypnose?
  - ¿Tweeteó sobre agent orchestration?
  - Grafo de followers para detectar mutuas en X
```

## Proceso de análisis (paso a paso)
```
1. INPUT: Prospecto objetivo (nombre + LinkedIn URL)

2. LinkedIn scan (playwright MCP):
   - Extraer lista de mutuals (si visible)
   - Anotar cargo y empresa de cada mutual
   - Ver posts recientes del prospecto

3. Exa enrichment:
   exa.findSimilar(prospecto_linkedin_url)
   → artículos, conferencias, menciones en prensa

4. X scan (x-api):
   → Buscar handle de X del prospecto
   → ¿Interactuó con cuentas de Carlos?

5. Calcular B-score:
   → Para cada mutual t: calcular w(t) · λ^(d-1)
   → Sumar todos los nodos

6. Output:
   → Tier + B-score
   → Mejor warm path disponible
   → Borrador de mensaje para esa ruta
```

## Plantilla de warm intro request
```
Via mutual connection (Tier 1):
  "Hi [mutual], quick ask: I see you know [prospecto].
  I'm working on agent orchestration (Sypnose) and think
  [prospecto]'s work on [tema] is directly relevant.
  Would you mind a quick intro? 2-line intro is enough."

Via engagement (Tier 2):
  "Hi [prospecto], saw your comment on [post de mutual].
  We're solving the same [problema]. Built Sypnose for it.
  741ms A2A with 9 agents. Worth 15 min?"
```

## Evidencia en producción
- Lead real Tier 1: Ulvi Hasanzade — quiere probar Sypnose activamente
- Dataset de análisis: 36 HOTs en data/contactos*.json con scoring completo
- Warm paths identificados: 8+ via mutuals Spain AI community
