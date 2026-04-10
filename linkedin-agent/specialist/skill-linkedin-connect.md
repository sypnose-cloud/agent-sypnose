# skill: linkedin-connect
Auto-connect LinkedIn via Chrome CDP. Funcional en produccion desde Mar 2026.

## Que hace
1. Verifica Chrome CDP en puerto 9222
2. Busca personas por keywords (AI Engineer, LLM, agents, ML, orchestration)
3. Filtra por region (Espana, LATAM, USA, UK)
4. Click en "Conectar" sin nota de invitacion
5. Persiste resultados en data/contactos.json

## Cuanto activarlo
- Una vez por dia, max 100 conexiones
- Carlos abre Chrome primero

## Regiones
- Espana: 105646813
- Sudamerica: 104514572
- Mexico: 101174742
- Colombia: 100876405
- USA: 103644278
- UK: 101165590

## Flujo MCP playwright
```
browser_navigate linkedin.com/search/results/people/?keywords=AI+Engineer+agents&geoUrn=105646813
browser_screenshot -> ver resultados
Para cada perfil:
  browser_click "Conectar"
  browser_click "Enviar sin nota" (si aparece modal)
  esperar 3s
Repetir hasta 100 conexiones
```

## Limites
- Max 100/dia (ban risk si se supera)
- CAPTCHA -> PARAR 24h
- Sin nota (mejor ratio en frio)

## Evidencia
- 23-Mar-2026: 100 conexiones Espana, 0 errores
- 30-Mar-2026: 100 conexiones Espana, 0 errores
- 14-Apr-2026: 8 conexiones via perfiles directos
