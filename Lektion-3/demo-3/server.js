const app = require('./app');
const mongoose = require('mongoose');
const port = 9999;

const serverURI = 'http://localhost:' + port;
const mongoURI = 'mongodb+srv://Joachim:<password>@lektion3.znsoi.mongodb.net/Todos?retryWrites=true&w=majority';



app.listen(port, () => {
    console.log('Webserver: ' + serverURI)
});



mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log('connected to Data Base'));