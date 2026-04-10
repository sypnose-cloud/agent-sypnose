---
name: bios
description: Arranque del agente Sypnose Sales. Lee estado y último KB.
---

# /bios — Arranque Sypnose Sales

## PASO 1: Recuperar estado
Lee .brain/task.md — si hay tarea pendiente, CONTINUA.

## PASO 2: Leer último resumen del KB
kb_list category=report project=sypnose limit=1
Luego kb_read de esa key.

## PASO 3: TodoWrite
TaskCreate para lo que vas a hacer ahora.

## PASO 4: Reportar en 3 líneas
1. Qué hiciste ayer
2. Qué toca hoy
3. Qué recomiendas

Luego ejecutar /daily si Carlos no dice otra cosa.
