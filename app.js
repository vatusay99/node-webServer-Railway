require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT;
// handlebars
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('home', {
		nombre: "David Diaz",
		titulo: "Pagina de Inicio."
	});
	
})

app.get('/generic', function(req, res){
	res.render('generic', {
		nombre: "David Diaz",
		titulo: "Pagina de Generico."
	});
})

app.get('/elements', function(req, res){
	res.render('elements', {
		nombre: "David Diaz",
		titulo: "Pagina de elementos."
	});
})

app.get('*', function(req, res){
	res.sendFile(__dirname+'/public/404.html');
})

app.listen(port,function(){
	console.log(`Servidor corriendo en el puerto: ${port}`);
	
})

