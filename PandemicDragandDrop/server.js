// Server 

const http = require('http');
const fs = require('fs');
var url = require('url');

const server = http.createServer(function(req,res){
var q = url.parse(req.url, true);
var filename = "." + q.pathname;    


fs.readFile( filename, function(error,data) {
    if(error) {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('Error: File Not Found')
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
    }
    res.end()
    
    })
})

server.listen(5000,function(error){
    if(error){
        console.log("Something is wrong", error)

    }else{
        console.log("http://localhost:5000/index.html")
        console.log('Listening on port 5000')
    }
})