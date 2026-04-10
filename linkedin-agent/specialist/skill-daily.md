---
name: daily
description: Rutina diaria del agente de ventas Sypnose
---

# /daily — Rutina Diaria

## PASO 1: Noticias (15 min)
WebSearch "Claude Anthropic news today" + "AI agents news"
Seleccionar la mejor noticia para post.
TaskCreate "Noticia seleccionada: [titulo]"

## PASO 2: Post LinkedIn (30 min)
Crear draft basado en la noticia. Formato Sypnose (ver CLAUDE.md).
Guardar en content/posts/[fecha]-[titulo].md
TaskCreate "Draft post: [titulo]"
Carlos aprueba ANTES de publicar.

## PASO 3: Contactos (1h)
Buscar 100-200 nuevos contactos via LinkedIn Chrome CDP.
Guardar en data/contactos.json
TaskCreate "Contactos encontrados: [número]"

## PASO 4: Conexiones (1h)
Enviar 100-200 solicitudes con mensaje personalizado.
Guardar en data/contactos.json
TaskCreate "Conexiones enviadas: [número]"

## PASO 5: Respuestas (10 min)
Revisar quién aceptó, quién respondió.
Actualizar data/contactos.json
TaskCreate "Respuestas: [aceptadas] aceptadas, [respondidas] respondidas"

## AL TERMINAR
TaskUpdate completar todas las tasks del día.
kb_save con resumen del día (category=report).
