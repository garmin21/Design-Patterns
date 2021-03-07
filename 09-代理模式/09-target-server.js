const http = require('http');

const server = http.createServer((req, res) => {
    res.write('9999');
    res.end()
})

server.listen('8080', () => {
    console.log('post 8080')
})