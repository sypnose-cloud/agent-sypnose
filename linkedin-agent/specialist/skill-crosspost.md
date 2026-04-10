# skill: crosspost

## Overview
Distribución del contenido LinkedIn a X, Threads y Bluesky. Adapta el mismo post a cada plataforma respetando sus límites de caracteres, cultura de engagement, y algoritmos. Siempre con brand-voice de Carlos.

## Cuándo activar
- Después de publicar un post en LinkedIn
- Al crear contenido nuevo (publicar en todas plataformas simultáneamente)
- Para maximizar alcance de contenido de alto rendimiento

## Stack de distribución
```
LinkedIn (principal) → X/Twitter → Threads → Bluesky
         ↓
    Canva MCP (imagen adaptada por plataforma)
         ↓
    x-api skill (X) / playwright MCP (Threads, Bluesky)
```

## Reglas por plataforma

### LinkedIn (principal)
- Max 3000 chars (usar hasta 1200-1500)
- Links SIEMPRE en comentario fijado
- Carrusel PDF si hay datos complejos
- Golden hour: primeros 60 min críticos

### X / Twitter
- Max 280 chars por tweet
- Formato ideal: thread de 5-8 tweets
- Links en el tweet final del thread
- Imágenes: 1200x675px
- Hashtags: max 2 (más = penalización)
- Horario: 9-10h o 17-18h hora España

### Threads (Meta)
- Max 500 chars por post
- No algoritmo penalización por links (a diferencia de LinkedIn)
- Estilo más conversacional que LinkedIn
- Imágenes opcionales pero aumentan engagement
- Horario: similar a Instagram (11-14h)

### Bluesky
- Max 300 chars
- Audiencia: desarrolladores, técnicos, AI researchers
- Links permitidos en el post
- Tono más técnico y directo que en otras plataformas
- Usa AT Protocol handles si hay autores referenciados

## Flujo crosspost (paso a paso)
```
1. POST LINKEDIN publicado + métricas iniciales (2h)

2. Si post >50 impressions → crosspost a X:
   a. skill x-api → Thread format
   b. Tweet 1: hook comprimido (el dato más fuerte)
   c. Tweets 2-5: puntos clave con datos
   d. Tweet final: link al post LinkedIn

3. Adaptar a Threads:
   a. playwright MCP → threads.net
   b. Versión 400-500 chars del LinkedIn post
   c. Añadir imagen (mismo archivo o versión cuadrada)

4. Adaptar a Bluesky:
   a. playwright MCP → bsky.app
   b. Versión 280-300 chars ultra-comprimida
   c. Link directo al post LinkedIn

5. Guardar en data/metricas.json:
   - URLs de todos los posts publicados
   - Timestamp de publicación
   - Plataforma y formato
```

## Adaptación de imagen por plataforma
```
LinkedIn: 1200x630px (landscape)
X post:   1200x675px (landscape)
Threads:  1080x1080px (cuadrado) o 1080x1350px (vertical)
Bluesky:  1200x630px (landscape)
```
Canva MCP puede exportar en múltiples tamaños del mismo diseño.

## Política de reutilización
```
Datos de producción Sypnose:
  Reutilizar SIEMPRE con los números exactos
  
Posts filosóficos/reflexivos:
  Adaptar tono por plataforma (X más agresivo, Bluesky más técnico)

Anuncios/novedades:
  Publicar en todas las plataformas el mismo día
  LinkedIn primero, luego X a las 2h, Threads y Bluesky simultáneos

Contenido viral de otros:
  Comentar en LinkedIn (no crosspost — es de otro)
  En X: quote tweet con perspectiva propia
```

## Métricas por plataforma (objetivos 2026)
| Plataforma | Métrica clave | Objetivo |
|-----------|--------------|---------|
| LinkedIn | Impressions | 500+/post |
| X | Impressions | 1000+/thread |
| Threads | Likes | 20+/post |
| Bluesky | Reposts | 5+/post |

## Herramientas por plataforma
- **X**: skill x-api con API oficial
- **Threads/Bluesky**: playwright MCP (sin API oficial disponible)
- **Imágenes**: canva MCP → exportar multi-formato
- **Scheduling**: google-calendar MCP para planificar
