// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// The comments.html file should be served as a static file, which means it should be read from the file system and served as is. You can use the fs module to read the file.
// The server should respond to GET requests to the /comments URL.
// The server should respond with the contents of the comments.html file.
// The server should respond with a 200 status code.
// The server should respond with the text/html content type.
// The server should respond with the contents of the comments.html file as the response body.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    fs.readFile('comments.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});
