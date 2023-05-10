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
    switch (req.body.type) {
        case "barchart":
            let bar = functions.bar(req.body.type, req.body.values);
            res.send(bar);
            break;
        case "linechart":
            let line = functions.line(req.body.type, req.body.values);
            res.send(line);
            break;
        case "piechart":
            let pie = functions.bar(req.body.type, req.body.values);
            res.send(pie);
            break;
        default:
            res.status(400).send("Something went wrong!")
            break;
    }
    
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});