var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
	res.write("<h1 style='color:red'><b>Happy Birthday JAAN</b></h1>");
	res.end();
}).listen(9000);
console.log("Server is running on port 9000");
