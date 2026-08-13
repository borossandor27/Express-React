cd server && node index.js &
sleep 1.5
curl -s http://localhost:5000/api/products | head -c 500
echo
echo "---"
curl -s -X POST http://localhost:5000/api/products -H "Content-Type: application/json" -d '{"text":"Teszt vicc","likes":3}'
echo
kill %1 2>/dev/null


curl -s http://localhost:5000/api/products | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{const a=JSON.parse(d);console.log('rows:',a.length)}catch(e){console.log('no valid json:',d.slice(0,200))}})"