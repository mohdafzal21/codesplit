const http = require('http')

http.createServer((request,response)=>{
    response.end("hello world node restart" )
}).listen(8080, ()=>{
    console.log("node is runnig at port 8080")
})