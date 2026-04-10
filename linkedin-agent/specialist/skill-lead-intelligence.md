# skill: lead-intelligence + social-graph-ranker
Pipeline prospeccion IA. Scoring + warm paths + outreach personalizado.

## Pipeline
Signal Scoring -> Mutual Ranking -> Warm Path -> Enrichment -> Outreach Draft

## Herramientas
- Exa MCP: busqueda personas y empresas
- X API: grafo seguidores, actividad reciente
- playwright MCP: LinkedIn cuando no hay API
- brand-voice: SIEMPRE antes de generar outreach

## Scoring senales
Role alignment 30% | Industry match 25% | Recent activity 20% |
Follower count 10% | Location 10% | Engagement with you 5%

## Warm path math
B(m) = sum_t w(t) * lambda^(d(m,t)-1)
lambda=0.5 (cada hop extra reduce valor a la mitad)
Tier 1 R(m) alto + path directo -> warm intro
Tier 3 sin path viable -> cold outreach directo

## Canal outreach (orden prioridad)
1. Warm intro email -> 2. Email directo -> 3. LinkedIn DM -> 4. X DM

## Ejemplo Sypnose
Target CTO startup AI Espana, publico sobre "agent coordination"
Warm path: conexion mutua ex-colega
Draft: "Vi tu post sobre coordinacion de agentes.
En Sypnose resolvimos eso con 741ms A2A. 15min para comparar notas?"
