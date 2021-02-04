const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('server running at http://localhost:' + PORT))

app.get('/', (req, res) => {
    // res.send('Hej')
    // res.sendFile('./views/index.html', { root:__dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})