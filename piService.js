var http = require('http');
var express = require('express');
var app = express();
var GPIOCtrl = require('./dhtCtrl.js');
app.get('/temp/', function(req, res){ 
//	GPIOCtrl.getTemp();
	console.log('req');
 });
app.listen(3003); 
console.log('App Server running at port 3000');
