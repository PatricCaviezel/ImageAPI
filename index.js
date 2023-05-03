const express = require('express');
const port = 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/bar', (req, res) => {
    res.sendFile(__dirname + '/public/bar.html');
});

app.get('/pie', (req, res) => {
    res.sendFile(__dirname + '/public/pie.html');
});

app.get('/line', (req, res) => {
    res.sendFile(__dirname + '/public/line.html');
});

app.get('/chartdata', (req, res) => {

});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});