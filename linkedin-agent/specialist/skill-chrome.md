---
name: chrome
description: Lanzar Chrome con CDP para automatización LinkedIn
---

# /chrome — Lanzar Chrome con CDP

Para automatizar LinkedIn, necesitas Chrome con debugging activo.

## Paso 1: Abrir Chrome con CDP

Windows (PowerShell):
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="$env:USERPROFILE\chrome-sypnose-profile"

Mac:
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir="$HOME/chrome-sypnose-profile"

## Paso 2: Login manual en LinkedIn
1. Chrome se abre con perfil separado
2. Ir a linkedin.com
3. Login con las credenciales
4. IMPORTANTE: hacer login ANTES de automatizar — LinkedIn detecta bots si no hay sesion humana

## Paso 3: Verificar CDP
curl http://localhost:9222/json/version
Si responde con JSON → Chrome CDP activo.

## Paso 4: Ejecutar script
python scripts/linkedin-connect.py

El script se conecta al Chrome via websocket y automatiza las conexiones.
