@echo off
title Armorer's Workbench Server
cd /d "%~dp0"
echo ========================================================
echo     ARMORER'S WORKBENCH // GUNSMITH REPOSITORY
echo ========================================================
echo Local Desktop URL:   http://127.0.0.1:8055
echo Mobile / Wi-Fi URL:  http://192.168.1.113:8055
echo.
echo Connecting to local LLMs (Ollama / LM Studio) ...
echo Open the Mobile URL on any phone or tablet on your Wi-Fi!
echo ========================================================
echo.
python -m uvicorn web_app.server:app --host 0.0.0.0 --port 8055
pause
