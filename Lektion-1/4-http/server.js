const { read } = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('request made')
    // console.log(req.url)
    // res.write('hello');
    res.end('hello poopie pants! >:D');
})

server.listen(9999, 'localhost', () => {console.log('server running on http://localhost:9999')})