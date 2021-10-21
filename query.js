const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    const result = url.parse("http://www.yogeshdotnet.com?id=10&name=yogesh", true).query;
    res.write(result.id);
    res.write(result.name);
    res.end("Response End");
}).listen(3000);


console.log(__dirname);