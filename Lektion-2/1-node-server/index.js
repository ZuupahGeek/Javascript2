const http = require('http');
const fs = require('fs');  // File System - hantera filer till och från datorn/servern
const path = requre('path');

const server = http.createServer((req, res) => {

    // console.log('request made')
    // console.log(req.url);

    // res.write('blöblöblö')

    // res.end('hej')

    res.setHeader('Content-type', 'text/html');


    // req.url == '/' 
    // ? url = 'index.html'
    // : urk = req.url + '.html'

    switch(req.url){
        case '/':
        url = 'index.html'
        res.statusCode = 200;
        break;
        case '/about':
            url = 'about.html';
            res.statusCode = 200;
            break;
        default:
            url = '404.html';
            res.statusCode = 404;
    }


    let url = 'index.html'

    fs.readFile(path.join(__dirname, 'veiws', 'url'), (err,data => {
        if (err) {
            console.log(err);
            res.end();
        }
        res.end(data)
    }))

})

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log('server running at  http://localhost:' + PORT)
})