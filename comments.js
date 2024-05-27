// Create web server
// This server will listen for requests on port 8080
// and serve the comments.html file when requested.

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  console.log("Request received");
  response.writeHead(200, {"Content-Type": "text/html"});
  fs.readFile('comments.html', function(err, data) {
    if (err) {
      response.writeHead(404);
      response.write("Not Found!");
    } else {
      response.write(data);
    }
    response.end();
  });
});

// Listen on port 8080, IP defaults to