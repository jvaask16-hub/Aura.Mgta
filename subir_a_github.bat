@echo off
chcp 65001 >nul
echo ========================================================
echo   aura.mgta — Subida Automatica a GitHub
echo ========================================================
echo.

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] No se encontro Git instalado en tu computadora.
    echo.
    echo Puedes instalarlo automaticamente ejecutando:
    echo winget install --id Git.Git -e --source winget
    echo.
    echo O descargandolo desde: https://git-scm.com/download/win
    echo.
    pause
    exit /b
)

echo [1/4] Inicializando repositorio Git local...
if not exist ".git" (
    git init
    git branch -M main
)

echo [2/4] Agregando archivos al control de versiones...
git add .

echo [3/4] Creando commit...
git commit -m "feat: aura.mgta suite comercial web con soporte supabase y vercel"

echo.
set /p REPO_URL="Ingresa la URL de tu repositorio de GitHub (ej. https://github.com/TU_USUARIO/aura-mgta-suite.git): "

if "%REPO_URL%"=="" (
    echo No ingresaste ninguna URL. La operacion se cancelo.
    pause
    exit /b
)

echo.
echo [4/4] Subiendo a GitHub...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git push -u origin main

echo.
echo ========================================================
echo   Proceso finalizado. Si no hubo errores, tu codigo ya
echo   esta listo en GitHub para conectar con Vercel.
echo ========================================================
pause
