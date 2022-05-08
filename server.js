const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => {
 fs.readFile('./MUSIC.html',(err,data)=>{
     res.write(data)
     return res.end()
    });
   
}).listen(port)


  console.log(`Server running at http://${hostname}:${port}/`);
