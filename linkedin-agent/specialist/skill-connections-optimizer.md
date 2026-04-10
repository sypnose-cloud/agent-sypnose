# skill: connections-optimizer

## Overview
Optimización estratégica de la red LinkedIn. No se trata de conseguir más conexiones, sino de conseguir las correctas. Incluye expansión hacia nichos de alto valor, pruning de conexiones irrelevantes, y priorización por buyer intent.

## Cuándo activar
- Al planificar la semana de conexiones
- Cuando SSI "Encontrar personas" está bajo 50/100
- Al revisar el JSON de contactos para decidir a quién contactar
- Cuando llega notificación de nueva solicitud de conexión

## Sistema de scoring de contactos
```
Score: 0-10 (solo contactar con 6+)

Factores (peso):
  Rol relevante (30%):      CTO, Head of AI, VP Engineering, Founder
  Industria (25%):          AI, Tech, SaaS, Consultora digital
  Actividad reciente (20%): Post en últimas 2 semanas
  Empresa (15%):            >50 empleados o VC-backed startup
  Ubicación (10%):          España/LATAM/UK/USA

Clasificación:
  HOT  (8-10): contactar INMEDIATAMENTE, con nota personalizada si Premium
  WARM (6-7):  contactar sin nota, prioridad media
  COLD (4-5):  solo si volumen bajo de opciones HOT/WARM
  SKIP (0-3):  ignorar
```

## Nichos prioritarios (2026)
| Nicho | Keywords búsqueda | Por qué |
|-------|------------------|---------|
| AI Orchestration | "agent orchestration" "multi-agent" | Competidores y potenciales clientes |
| Applied AI Leaders | "head of AI" "VP of AI" "chief AI" | Decision makers |
| AI Startups España | "startup" "fundador" "CTO" Madrid/Barcelona | Clientes potenciales España |
| VC AI | "venture capital" "AI investment" | Distribución y funding |
| LLM Engineers | "LLM" "LangChain" "RAG" | Comunidad técnica |
| MCP Builders | "MCP server" "Claude tools" | Early adopters |

## Flujo semanal de conexiones
```
Lunes:
  1. Revisar data/contactos_nuevos_*.json
  2. Filtrar HOT + WARM sin conectar aún
  3. Preparar lista de 100 para semana

Martes-Viernes:
  4. Script CDP → 20-25 conexiones/día (total 80-100/semana)
  5. Sin mensaje (tasa aceptación mayor)
  6. Actualizar data/contactos.json con status "pending"

Domingo:
  7. Revisar quién aceptó (status → "connected")
  8. HOT aceptados → mover a pipeline lead-intelligence
  9. Preparar lista siguiente semana
```

## Reglas de seguridad LinkedIn
```
HARD LIMITS:
  Max 100 conexiones/día (LinkedIn banea con más en cuenta free)
  Max 200 conexiones/semana (promedio recomendado: 100/semana)
  Parar inmediatamente si aparece CAPTCHA
  Esperar 24h tras cualquier restricción temporal

SOFT RULES:
  No enviar >5 mensajes personalizados/día (tasa rechazo alta = penalización)
  Espaciar clicks (0.5-2s entre acciones en el script)
  Mezclar búsquedas (no repetir misma keyword en el mismo día)
```

## Estructura data/contactos.json
```json
{
  "contactos": [
    {
      "nombre": "Nombre Apellido",
      "empresa": "Empresa",
      "rol": "CTO",
      "linkedin_url": "linkedin.com/in/handle",
      "score": 8.5,
      "clasificacion": "HOT",
      "pais": "ES",
      "fecha_añadido": "2026-04-14",
      "status": "pending",
      "notas": "Post sobre agent orchestration esta semana"
    }
  ]
}
```

## Warm path por clasificación
```
HOT (8-10):
  1. Conectar sin nota
  2. Esperar 3-5 días que acepte
  3. Si acepta → lead-intelligence: buscar warm path
  4. Si hay mutual → pedir intro
  5. Si no hay → mensaje directo referenciando algo específico

WARM (6-7):
  1. Conectar sin nota
  2. Esperar 7 días
  3. Si acepta → añadir a lista de monitoreo
  4. Cuando publique algo relevante → comentar con valor
  5. Después de 2-3 interacciones → abrir conversación
```

## Métricas de red actuales (Apr 2026)
- Total contactos investigados: 441+
- HOT identificados: 36 (buyer intent confirmado)
- WARM: 200+
- Conexiones enviadas: ~200 (100% sin errores)
- Tasa aceptación estimada: 30-40%
- Lead real identificado: Ulvi Hasanzade (quiere probar Sypnose)
