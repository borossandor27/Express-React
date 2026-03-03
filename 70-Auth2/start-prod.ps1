# start-prod.ps1
# $env:NODE_ENV="production" Ha production módban szeretnéd futtatni, de jelenleg development módban van a beállítva.
$env:NODE_ENV="development"
Write-Host "Indítás development módban..." -ForegroundColor Green
docker compose up -d
Write-Host "Kész! Alkalmazás elérhető:" -ForegroundColor Green
Write-Host "- Frontend: http://localhost:3000" -ForegroundColor Yellow
Write-Host "- Backend API: http://localhost:5000" -ForegroundColor Yellow