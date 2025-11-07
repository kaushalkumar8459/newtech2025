const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {
    resp.write("hello")
    console.log("loaded");
    resp.end();
}).listen(3200, () => {
    console.log("server is running");
})