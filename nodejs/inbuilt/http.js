let http = require('http');

// req> what we send to server(params,queryParams,body)
// res > what server will send us

let server = http.createServer((req,res) => {
    res.write("Hi From http server node code");
    res.end()
})

server .listen(9221)