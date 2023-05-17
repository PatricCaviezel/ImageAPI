const express = require('express');
const {
    exec
} = require('child_process');
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
        let returnData = {
            src: imgSrc
        }
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

app.post('/write', (req, res) => {
    const rubyScript = 'C:/Workspace/node.js/ImageAPI/main.rb';

    const jsonData = JSON.stringify(req.body);
    const command = `ruby ${rubyScript} '${jsonData}'`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            res.send(`Error executing Ruby script: ${error}`);
            return;
        }
        res.send(`Ruby script output: ${stdout}`);
    });
});

app.listen(port, () => {
    console.log(`Server started on \x1b[1m\x1b[35mhttp://localhost:${port}\x1b[0m`);
});