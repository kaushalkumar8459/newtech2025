const http = require('http');
http.createServer((req, resp) => {
    resp.write('server start')
    resp.end("server end")
}).listen(4040, () => {
    console.log("server start at 4040");
});