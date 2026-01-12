//http method
//get--read
//post--create
//put--update
//delete--delete
//patch--partial update
//api=application programming interface=do server k beech m communicate krne k liye
//rest api is a type of api which use http to communicate b/w server and backend
const http=require("http")
// const server=http.createServer((req,res)=>{
//     console.log(req.url)
//     console.log(req.method)
//     res.writeHead(200,{"content-type":"text/html"})//200 means ok(successful response)(status code)
//     res.write("<h1>bhelcome</h1>")
//     res.end("hello from asus")
// })
// const server=http.createServer((req,res)=>{
//     if(req.url=="/home" && req.method==="GET"){
//         res.writeHead(200,{
//         "content-type":"application/json"
//     })
//     res.end(JSON.stringify({
//         success:"true",
//         user
//     }));
//     }
//     else{
//         res.end("page not found");
//     }
//     let user={
//         username:"ritika",
//         email:"soniritika172006@gmail.com"
//     }
    
// })
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Home Page</h1>");
//     } 
//     else if (req.url === "/about") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>About Page</h1>");
//     } 
//     else if (req.url === "/contact") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Contact Page</h1>");
//     } 
//     else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.end("<h1>Page Not Found</h1>");
//     }
// });
// const fs=require("fs");
// const server = http.createServer((req, res) => {
//     fs.readFile("./server/index.html",'utf-8',(err,data)=>{
//         if(err){
//             res.end("server error")
//         }
//         res.writeHead(200,{
//             "content-type":'text/html'
//         })
//         res.end(data);
//     });
// });
// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });