// create web server
// create a web server that listens to the port 3000 and returns the comments array

const http = require('http');
const comments = require('./comments');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(comments));
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Path: comments.js
// create a comments array that contains objects with the following fields: name, email, comment

module.exports = [
    {
        name: 'John Doe',
        email: ''
    }
];
