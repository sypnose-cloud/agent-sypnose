# skill: content-engine

## Overview
Motor de creación de contenido multi-plataforma. Toma una noticia o idea y produce contenido diferenciado para LinkedIn, X, Threads y Bluesky. Nunca genérico. Siempre con voz de Carlos. Siempre con datos reales Sypnose.

## Cuándo activar
- Al convertir una noticia AI en contenido
- Al adaptar un post LinkedIn a otras plataformas (crosspost)
- Al planificar el calendario semanal de contenido

## Proceso completo (5 pasos)
```
1. INPUT — Noticia, idea técnica, o métrica nueva
2. ANGLE — Seleccionar ángulo viral (ver sypnose-linkedin)
3. DRAFT — Redactar con brand-voice para plataforma objetivo
4. IMAGE — Crear visual con canva MCP (fondo #eeece2)
5. DISTRIBUTE — crosspost a X, Threads, Bluesky (adaptado)
```

## Plantilla LinkedIn (formato exacto)
```markdown
[HOOK — max 150 chars — parar el scroll]

[Párrafo 1: contexto — por qué importa ahora]

[Párrafo 2: el problema que todos tienen]

[Párrafo 3: cómo lo resuelve Sypnose — datos reales]

[Párrafo 4: reflexión — no CTA]

[Link o recurso → va en COMENTARIO fijado, no aquí]

#AIAgents #Claude #Sypnose [+ 2 más específicos]
```

## Plantilla X/Twitter (formato exacto)
```
Thread de 5-8 tweets:
Tweet 1: Hook agresivo (max 280 chars) — el dato más impresionante
Tweet 2-6: Expansión con datos, código, o proceso
Tweet 7: Reflexión o lección
Tweet 8: CTA suave — link al repo o post LinkedIn
```

## Plantilla Threads/Bluesky
```
Versión comprimida del LinkedIn post:
- Max 500 chars (Threads) / 300 chars (Bluesky)
- Solo el dato más fuerte + reflexión
- Link al post LinkedIn completo
```

## Stack técnico de producción
```
Investigación:     WebSearch + deep-research + exa-search
Redacción:         Claude Sonnet 4.6 (con brand-voice)
Imágenes:          Canva MCP (plantilla Sypnose)
Distribución:      crosspost skill (X, Threads, Bluesky)
Almacenamiento:    content/posts/YYYY-MM-DD-titulo.md
```

## Tipos de contenido y cuándo usar cada uno
| Tipo | Frecuencia | Formato | Ejemplo |
|------|-----------|---------|---------|
| Noticia + perspectiva | 3x/semana | Imagen + texto | "Claude lanzó X. Esto cambia Y en Sypnose" |
| Dato de producción | 1x/semana | Carrusel PDF | "741ms: cómo lo logramos" |
| Error admission | 1x/mes | Solo texto | "Nos equivocamos con la arquitectura. Aquí por qué" |
| Tutorial técnico | 1x/mes | Carrusel PDF | "Cómo construir A2A latency bajo 1s" |
| Stack reveal | 1x/mes | Imagen + texto | "Nuestro stack completo: gratis vs pago" |

## Creación de imagen (canva MCP)
```
Especificaciones técnicas:
- Fondo: #eeece2 (crema — NUNCA oscuro)
- Acento: #da7756 (terra cotta Anthropic)
- Texto principal: #1a1a2e
- Font titulos: Poppins Bold
- Font body: Lora Regular
- Font código: JetBrains Mono

Tamaños:
- LinkedIn post: 1200x630px
- Carrusel LinkedIn: 1080x1080px (cada slide)
- X header image: 1500x500px
- X post image: 1200x675px
```

**Workflow imagen con Canva MCP:**
```
1. mcp__claude_ai_Canva__generate-design con specs Sypnose
2. Añadir texto del post (hook en Poppins Bold)
3. Incluir dato clave como elemento visual destacado
4. Firmar: "by Carlos De La Torre | Sypnose"
5. Exportar como PNG para LinkedIn
```

## Reglas de calidad (anti-genérico)
```
PROHIBIDO:
- "Excited to share..."
- "Game-changer"
- "In today's rapidly evolving landscape..."
- "Here's why this matters:"
- "Let me know in the comments"
- Preguntas al final del post (engagement bait)
- Stock photos o imágenes genéricas

REQUERIDO:
- Datos exactos (741ms, 9 agentes, 47 modelos)
- Fecha o contexto temporal
- Al menos 1 dato exclusivo de Sypnose
- Imagen que no parezca hecha con una template
```

## Evidencia en producción
- 2 posts con imagen publicados: 74 impressions totales (Apr 2026)
- Carrusel "Error Budgets": PDF 5 slides generado, pending publicación
- Comentarios virales: 4 posts técnicos con valor real añadido
- Fuentes de noticias: Anthropic blog, LinkedIn #AIAgents feed, X timeline Claude
