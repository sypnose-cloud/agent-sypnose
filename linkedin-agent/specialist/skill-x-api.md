# skill: x-api

## Overview
API oficial de X/Twitter para publicar threads, buscar conversaciones sobre AI agents, analizar engagement, y monitorear menciones de Sypnose y Carlos. Complementa LinkedIn en la estrategia de distribución.

## Cuándo activar
- Al hacer crosspost de un post LinkedIn a X
- Al monitorear conversaciones sobre agent orchestration en X
- Al buscar el handle de X de un prospecto para research
- Al publicar actualizaciones técnicas breves

## MCPs requeridos
```json
{
  "x-api": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-twitter"],
    "env": {
      "TWITTER_API_KEY": "$TWITTER_API_KEY",
      "TWITTER_API_SECRET": "$TWITTER_API_SECRET",
      "TWITTER_ACCESS_TOKEN": "$TWITTER_ACCESS_TOKEN",
      "TWITTER_ACCESS_TOKEN_SECRET": "$TWITTER_ACCESS_TOKEN_SECRET"
    }
  }
}
```
Ver config.json para configuración completa.

## Herramientas disponibles
```
post_tweet         → Publicar tweet o thread
get_timeline       → Ver timeline de una cuenta
search_tweets      → Buscar tweets por query
get_user           → Perfil de usuario por @handle
get_followers      → Lista de followers de una cuenta
create_thread      → Publicar thread de múltiples tweets
```

## Flujo crosspost LinkedIn → X
```
1. Post LinkedIn publicado (impressions >30 en primera hora)
2. Seleccionar el dato más impresionante del post como Tweet 1
3. Expandir en thread de 5-7 tweets:
   - Tweet 1: Hook (dato + número)
   - Tweets 2-4: Contexto y desarrollo
   - Tweet 5: Reflexión
   - Tweet 6: Link al post LinkedIn completo
4. post_tweet / create_thread → publicar
5. Guardar URN de X en data/metricas.json
```

## Plantilla thread X (formato)
```
Tweet 1 (hook — max 280 chars):
"[Dato impresionante]. [Contexto en 10 palabras].
[Segunda frase que genera curiosidad]"

Ejemplo real:
"9 AI agents. 741ms latency. Zero human supervision.
This isn't a demo. It's our Tuesday production run."

Tweets 2-5 (desarrollo):
"[Punto 1]:
- [Sub-punto con dato]
- [Sub-punto con dato]"

Tweet final:
"Full breakdown on LinkedIn (link en respuesta)
Repo: github.com/radelqui/sypnose"
```

## Búsquedas para monitoreo diario
```python
queries_diarias = [
    "#AIAgents lang:en -is:retweet min_faves:20",
    "agent orchestration -is:retweet min_faves:10",
    "LangGraph OR CrewAI OR Sypnose lang:en",
    "@radelqui OR sypnose",
    "Claude agents production -is:retweet min_faves:30"
]

# Para cada query:
# 1. search_tweets(query, max_results=10)
# 2. Filtrar: engagement >20 likes
# 3. Si es de prospecto HOT → guardar para engagement
# 4. Si es viral → considerar para quote tweet
```

## Estrategia de engagement en X
```
Publicar:       1-2 veces/semana (vs LinkedIn: 1/día)
Threads:        Solo para contenido con >3 puntos que desarrollar
Quote tweets:   Si hay algo que añadir a un post viral
Replies:        Respuestas técnicas de valor (como en LinkedIn)
Prohibido:      Retweets sin contexto, replies genéricos
```

## Análisis de prospecto via X
```
1. Buscar handle de X del prospecto:
   search_tweets("[nombre] [empresa]") → ver si aparece

2. Si tiene cuenta:
   get_user(username) → followers, descripción, verificado
   get_timeline(user_id, max_results=20) → tono, temas

3. Señales de buyer intent en X:
   - Tweets sobre limitaciones de LangChain/CrewAI
   - Preguntas sobre latencia de agentes
   - Menciones de "production AI agents"
   - Seguir cuentas de Anthropic, Claude

4. Añadir señales al research de deep-research
```

## Métricas y seguimiento
```
data/metricas.json por post:
{
  "plataforma": "x",
  "tweet_id": "...",
  "thread_ids": ["...", "..."],
  "impressions_2h": ...,
  "impressions_24h": ...,
  "likes": ...,
  "retweets": ...,
  "replies": ...,
  "fecha": "YYYY-MM-DD"
}
```

## Rate limits API X
```
Free tier (Basic):
  - 500,000 tweets read/mes
  - 1,500 tweets write/mes
  → Suficiente para este uso

Límites por request:
  - post_tweet: max 300 req/15min
  - search_tweets: max 180 req/15min

Costes:
  Basic API: $100/mes
  → Alternativa sin coste: playwright MCP para publicar manualmente
```

## Alternativa sin API (playwright MCP)
```
Si X API no está configurada:
  1. playwright MCP → twitter.com (sesión activa)
  2. Navegar a "Compose tweet"
  3. Escribir thread manualmente
  4. Screenshot como evidencia
  → Más lento pero sin coste de API
```
