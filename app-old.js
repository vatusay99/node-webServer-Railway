const http = require('http');

http.createServer((req, res)=>{
		res.write('Inicio AppServer');
		res.end();
})
.listen(8080)

console.log('Escuchando en el port: ', 8080);

