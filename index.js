const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
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
            functions.bar(req.body.type, req.body.values);
            break;
        case "linechart":
            functions.line(req.body.type, req.body.values);
            break;
        case "piechart":
            functions.bar(req.body.type, req.body.values);
            break;
        default:
            res.status(400).send("Something went wrong!")
            break;
    }

    const filePath = 'C:/Workspace/node.js/ImageAPI/Image.png';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        return;
        }

        let base64Image = Buffer.from(data).toString('base64');
        let imgSrc = `data:image/png;base64,${base64Image}`;
        let returnData = {src: imgSrc}
        res.send(returnData);

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            } else {
                console.log('File deleted successfully.');
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});