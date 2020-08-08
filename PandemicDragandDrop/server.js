// Server 

const http = require('http');
const fs = require('fs');
//var url = require('url');
 var path = require('path');

const server = http.createServer(function(req,res){
    if(req.url === "/index.html"){
    fs.readFile("./public/index.html", "UTF-8", function(error, html){
        if(error){ 
            res.writeHead(404,{'Content-Type':'text/html'});
            res.write('Error: File Not Found')
        }else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        }
    });

    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    
    }else if(req.url.match("\.png$")){
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }
});






// // var q = url.parse(req.url, true);
// // var filename = "." + q.pathname;

// fs.readFile("./public/index.html", function(error,html) {
//     // if(error) {
//     //     res.writeHead(404,{'Content-Type':'text/html'})
//     //     res.write('Error: File Not Found')
//     // } else {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.end(html)
// });
// }else if(req.url.match("\.css$")){
//     var cssPath = path.join(__dirname, 'public', req.url);
//     var fileStream = fs.createReadStream(cssPath, "UTF-8");
//     res.writeHead(200, {"Content-Type": "text/css"});
//     fileStream.pipe(res);
//     //     if(error){
//     //         res.writeHead(404,{'Content-Type':'text/html'})
//     //         res.write('Error: File Not Found')
//     //     }else{
//     //     res.writeHead(200,{"Content-Type": "text/css"});
//     //     res.write(data);
//     //     }
//     //     res.end();
//     // });
//     }
// });
server.listen(5000,function(error){
    if(error){
        console.log("Something is wrong", error)

    }else{
        console.log("http://localhost:5000/index.html")
        console.log('Listening on port 5000')
    }
})