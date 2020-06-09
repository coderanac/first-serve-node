const http = require('http');

const requestListener = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end('<img src="https://pngimg.com/uploads/cat/cat_PNG50504.png"/>');
}

const server = http.createServer(requestListener);
server.listen(3000, '192.168.0.35');