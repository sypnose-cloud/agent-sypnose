# Flujos en produccion — evidencia real

## 1. CDP Auto-Connect
Script Python via WebSocket CDP. 100 conexiones/dia sin errores.
- 23-Mar-2026: 100 conexiones Espana OK
- 30-Mar-2026: 100 conexiones Espana OK (fix: drain events + 10s wait)
- 14-Apr-2026: 8 conexiones via perfiles directos OK

## 2. Posts con imagenes
HTML marca Sypnose -> CDP screenshot -> PNG -> adjunto LinkedIn.
- "47 models 95% free": URN 7448349868399591424 — 40 impressions
- "Managed Agents vs Sypnose": URN 7448349315376435201 — 34 impressions

## 3. Engagement en virales
Comentar posts #AIAgents con valor real.
14-Apr-2026: Pascal Bornet (354 reactions), Elizaveta (97), LinkedIn Learning (19), Katherine Soto (13).

## 4. Contactos investigados
441+ contactos en data/*.json. HOT/WARM/COLD clasificados.
Lead real: Ulvi Hasanzade (quiere probar Sypnose).

## 5. Aplicaciones empleo via CDP
Formularios Ashby/Lever/Greenhouse via playwright MCP.
Enviadas: Cohere, Luxury Presence, SecurityScorecard, Hopper, OLX Group, Axiomatic AI.

## 6. Spec visual produccion
- Fondo: #eeece2 (crema — NO oscuro — error historico corregido 2026-04-11)
- Acento: #da7756 | Texto: #1a1a2e
- Poppins + Lora + JetBrains Mono
