const express = require('express');
const bodyParser = require('body-parser');
const functions = require('./functions');

const port = 3000;

const app = express();

app.use(bodyParser.json());
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

app.post('/image', (req, res) => {
    // console.log(req.body);
    let chart = functions.chart(req.body.type, req.body.values);
    res.send(chart);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});