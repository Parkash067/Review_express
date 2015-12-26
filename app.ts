/// <reference path="typings/node/node.d.ts" />
/// <reference path ="typings/express/express.d.ts"/>

//step#1: http server
/*var http=require('http');
http.createServer(function(req,res)
{
	console.log("req. hit");
}).listen(3000);
*/

//step#2: Response function
/*var http=require('http');
http.createServer(function(req,res){
	console.log("req hit");
	res.writeHead(200,{'Content-type':'text/html'}); //set text and html
	res.write("<h1>Pk</h1><br>");
	res.write("<font color='green'>Response rendered</font>");
	res.end();
}).listen(3000||2000);*/

//step#3: static req. rendering of file
/*var http=require('http');
http.createServer(function(req,res){
	if(req.url=='/home'){
		console.log(req.url);
		res.writeHead(200,{'Content-type':'text/html'});
		res.write("<h1 style=color:blue;>Home Page</h1>");
		res.end();
		}
	else if(req.url=='/admin')
	{
		console.log('/admin');
		res.writeHead(200,{'Content-type':'text/html'});
		res.write("<h1 style=color:darkred>Admin page</h1>");
		res.end();
	}	
	else
	{
		console.log("Error");
		res.writeHead(200,{'Content-type':'text/html'});
		res.write("<h1>404 error!</h1>");
		res.end();
	}
}).listen(3000);*/

//step#4: file system
/*var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
	if(req.url=="/home")
	{
	fs.readFile('./views/home.html',function(er,data){
		res.write(data.toString());
		res.end();
	});
	}
	else if(req.url=="/admin")
	{
		fs.readFile('./views/admin.html',function(er,data){
			console.log(er);
			res.write(data.toString());
			res.end();
		})
	}
	else if(req.url=="/script")
	{
		fs.readFile('./views/script.html',function(er,data)
		{
			res.write(data.toString());
			res.end();
		})
	}
	else
	{
		fs.readFile('./views/error.html',function(er,data){
			res.write(data.toString());
			res.end();
		})
	}
	
}).listen(3000);*/



//=============================== Express ============================================
//step#1:Express
/*import express = require('express');
var app=express();
var port=3000;
app.get('/',function(req,res){
	res.send('Hello world');
})
app.listen(port,function(){
	console.log("the server is listening at port:"+port);
});*/


//step#2:Rendering html file 
/*import express =require('express');
var path=require('path');
var app:express.Express=express();


//set configuration
app.set('trust proxy',true);
app.set('strict routing',true);
app.set('case sensitive routing',true);

//set view engine
app.set('views',path.join(__dirname,'./views/ejs'));
app.set('view engine','ejs');

app.get('/home',function(req,res){
	console.log(req.path);
	res.render('home');
})


var port:number=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listenport=server.address().port;
	console.log("server is listening at port"+port);
})
*/

//step#3 : Rendering an image
/*import express =require('express');
var path=require('path');
var app:express.Express=express();

//set configuration

app.set('trust proxy',true);
app.set('case sensitive routing',true);
app.set('strict routing', true);

//set view-engine
app.set('views',path.join(__dirname,'./views/ejs'));
app.set('view engine','ejs');

//set middleware
app.use(express.static(path.join(__dirname,'./public')));

app.get('/home',function(req,res){
	res.render('home');
});


var port=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listenport=server.address().port;
	console.log("the server is listening at port:" +listenport);
})*/

//step#4 :Multiple middleware
/*import express = require('express');
var path=require('path');
var app:express.Express=express();

//set configuration
app.set('trust proxy',true)
app.set('strict routing',true);
app.set('case sensitive routing',true);

app.set('views',path.join(__dirname,'./views/ejs'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'./public')));

app.use(function(req,res,next){
	console.log("middleware 1");
	next();
})
app.use(function(req,res,next){
	console.log("middleware 2");
	next();
	
})
app.use(function(req,res,next){
	console.log("middleware 3");
	next();
})
app.get('/home',function(req,res){
	res.render('home');
});

var port=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listenport=server.address().port;
	console.log("listen at: "+listenport);
	
})*/

//step#5 :  Error handling middleware

/*import express = require('express');
var path=require('path');
var app:express.Express=express();

//set configuration
app.set('trust proxy',true)
app.set('strict routing',true);
app.set('case sensitive routing',true);

app.set('views',path.join(__dirname,'./views/ejs'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'./public')));

//Custom Middleware
app.use(function (req: express.Request, res: express.Response, next: Function) {
  console.log('Middleware 1');
  next();
});

app.use(function (req: express.Request, res: express.Response, next: Function) {
  console.log('Middleware 2');
  next("Error in Middle ware 2");
});

app.use(function (req: express.Request, res: express.Response, next: Function) {
  console.log('Middleware 3');
  next();
});

app.use(function (err: any, req: express.Request, res: express.Response, next: Function) {
  console.log('Error Middleware');
  res.send(err);
});

var port=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listenport=server.address().port;
	console.log("listen at: "+listenport);
	
})*/


//step#6: Mounting Middleware
/*import express = require('express');
var path=require('path');
var app:express.Express=express();

//set configuration
app.set('trust proxy',true)
app.set('strict routing',true);
app.set('case sensitive routing',true);

app.set('views',path.join(__dirname,'./views/ejs'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'./public')));

app.use(function (req, res, next) {
    console.log('Middleware 1');
    console.log('Time:', Date.now());
    next();
});
//Mounting the Middlewares
//Mounts the middleware function(s) at the path. If path is not specified, it defaults to “/”.
//middleware mounted without a path will be executed for every request to the app.
app.use(function (req, res, next) {
    console.log('Middleware 2');
    console.log('Time:', Date.now());
    next();
});
//Mounting a middleware at a path will cause the middleware function to be executed whenever the base of the requested path matches the path.
app.use('/admin', function (req, res, next) {
	if(req.baseUrl=='/admin')
	{
			console.log(req.baseUrl);
		next("error");
	}
	else{

    console.log('Middleware Mount for admin');
    next();
	}
});
app.use(function(err:any, req, res, next) {
    console.log('Error Middleware');
    res.send(err);
});
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/admin:pk', function (req, res) {
    res.send('Admin Page');
});

var port=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listenport=server.address().port;
	console.log("listen at: "+listenport);
	
})*/



//Example: Checking users..

/*import express=require('express');
var path=require('path');
var app=express();

let users:string[]=["/home","/admin"];
let errors:string[]=[];
//set configuration
app.set('trust proxy',true)
app.set('strict routing',true);
app.set('case sensitive routing',true);

app.set('views',path.join(__dirname,'./views/ejs'));
app.set('view engine','ejs');
//set middleware
app.use(express.static(path.join(__dirname,'./public')));


app.use(function(req,res,next){
	if(users.indexOf(req.url)!=-1)
	{
		console.log(req.url);
		next();
	}
	else
	{
		console.log(req.url);
		next("Error");
	}
	
})

app.use(function(err:any,req,res,next)
{
	res.render('error');
})

app.get("/home",function(req,res){
	res.render('home');
})
app.get("/admin",function(req,res){
	res.send('Admin page');
})


var port=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listenport=server.address().port;
	console.log("listen at: "+listenport);
	
})*/


//step#7 Routes
/*import express=require('express');
import admin=require('./routes/admin')
var path=require('path');
var app=express();

let users:string[]=["/home","/admin"];
let errors:string[]=[];
//set configuration
app.set('trust proxy',true)
app.set('strict routing',true);
app.set('case sensitive routing',true);

app.set('views',path.join(__dirname,'./views/ejs'));
app.set('view engine','ejs');
//set middleware
app.use(express.static(path.join(__dirname,'./public')));

app.use("/admin",admin);

var port=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listenport=server.address().port;
	console.log("listen at: "+listenport);
	
})
*/

//Example: Login Users
/*
import express=require('express');
var path=require('path');
var app=express();
var data=[
	{name:"parkash",id:"b11001067",age:20},
	{name:"hadi",id:"b2321067",age:21},
	{name:"zain",id:"b1231067",age:22},	
	{name:"sarah",id:"b23041067",age:23},
	{name:"mehreen",id:"b4541067",age:24}
	]
//set configuration
app.set('trust proxy',true)
app.set('strict routing',true);
app.set('case sensitive routing',true);

app.set('views',path.join(__dirname,'./views/ejs'));
app.set('view engine','ejs');
//set middleware
app.use(express.static(path.join(__dirname,'./public')));

app.get('/login',function(req,res){
	res.render('login');
})

app.get('/search',function(req,res){
	var bool=false
	for(var i=0;i<data.length;i++){
		if((data[i].name).toLowerCase==(req.query.username).toLowerCase){
			bool=true;
			res.json(data[i]);
			return;
			
		}

	}
	if(bool==false){
	console.log(req.query.username);
	res.send("Please signup....");
	}
})


var port=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listenport=server.address().port;
	console.log("listen at: "+listenport);
	
})*/


//Example: find products in shop...
/*import express=require('express');
var path=require('path');
var app=express();
var products=[
	{id:1,categories:"cosmetics"},
	{id:2,categories:"innerwear"},
	{id:3,categories:"electronics"},
	]

app.set('trust proxy',true)
app.set('strict routing',true);
app.set('case sensitive routing',true);

app.set('views',path.join(__dirname,'./views/ejs'));
app.set('view engine','ejs');
//set middleware
app.use(express.static(path.join(__dirname,'./public')));

app.get('/products',function(req,res){
	res.render('products');
})
app.get('/products/:pid',function(req,res){
	var bool=false;
	for(var i=0;i<products.length;i++){
		if(products[i].id==req.params.pid)
		{
			res.json(products[i]);
			return
		}
	}
	if(bool==false)
	{
		res.send("<h2>Product is not found</h2>");
	}
	
});
var port=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listenport=server.address().port;
	console.log("listen at: "+listenport);
	
});*/