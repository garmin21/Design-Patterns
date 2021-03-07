const http = require('http');
const httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var server = http.createServer((req: any, res: any) => {
    proxy.web(req, res, { target: 'http://127.0.0.1:8080' });
});

console.log("listening on port 5050")
server.listen(5050);