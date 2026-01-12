//http method
//get--read
//post--create
//put--update
//delete--delete
//patch--partial update
//api=application programming interface=do server k beech m communicate krne k liye
//rest api is a type of api which use http to communicate b/w server and backend
const http=require("http")
const server=http.createServer((req,res)=>{
    console.log(req.url)
    console.log(req.method)
    res.writeHead(200,{"content-type":"text/html"})//200 means ok(successful response)(status code)
    res.write("<h1>bhelcome</h1>")
    res.end("hello from asus")
})

server.listen(3000,()=>{
    console.log("server is running on port",3000)
})