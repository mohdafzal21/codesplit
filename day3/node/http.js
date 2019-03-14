const http = require('http')

http.createServer((req,res)=>{
    console.log(req.url,req.headers,req.body)

}).listen(8000,()=> console.log("the server is runnig at port 3000"))