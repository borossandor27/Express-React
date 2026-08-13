cd server && node index.js &
sleep 1.5
curl -s http://localhost:5000/api/products | head -c 500
echo
echo "---"
curl -s -X POST http://localhost:5000/api/products -H "Content-Type: application/json" -d '{"text":"Teszt vicc","likes":3}'
echo
kill %1 2>/dev/null