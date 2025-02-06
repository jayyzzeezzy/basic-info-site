const http = require('node:http');
const url = require('node:url');
const fs = require('node:fs');

const errPage = fs.readFileSync("404.html", 'utf-8', (err, data) => {
    if (err) throw err;
    return data;
});

http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    let filename = "";
    if (q.pathname === "/") {
        filename = "." + "/index.html";
    } else {
        filename = "." + q.pathname;
    }

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(errPage);
            return res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);