const http = require('http');
http.createServer((req, res) => {
    res.write('Server end');
    res.end('server stopped');
}).listen(8081, () => {
    console.log('server 1 started');
})

http.createServer((req, res) => {
    res.write('Server 2 end');
    res.end('server2 stopped');
}).listen(8082, () => {
    console.log('server 2 started');
})