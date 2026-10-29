@echo off
title Armorer's Workbench Server
cd /d "%~dp0"
echo ===================================================
echo     ARMORER'S WORKBENCH // GUNSMITH REPOSITORY
echo ===================================================
echo Starting local web server on http://127.0.0.1:8055 ...
echo Connecting to local LLMs (Ollama / LM Studio) ...
echo.
python -m uvicorn web_app.server:app --host 127.0.0.1 --port 8055
pause
