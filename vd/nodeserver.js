const http = require('http');
const fs = require('fs');
const port = 80;



const server= http.createServer(function(req,res){
    res.writeHead(200,{'content-Type': 'text/html'})
    fs.readFile('index.html', function(error,data)
    {
        if (error){
            res.writeHead(404)
            res.write('file not found')}
        else {
            res.write(data)
        }

        })
  
    res.end()
})


server.listen(port,function(error){
    if(error){
        console.log('something went wrong', error)
    }
    else{
        console.log('server listening on port :- ' + port)
    }
})