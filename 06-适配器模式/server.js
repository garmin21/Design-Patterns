const http = require('http')


const server = http.createServer((req, res) => {
    if(req.url === '/user/info') {

        console.log(req)
        res.write('xxxx')

        res.end()
    }
})


server.listen(8080, () => {
    console.log('dnsdnsmdns')
})