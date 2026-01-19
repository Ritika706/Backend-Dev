const http = require("http");
const fs=require("fs");
const { Transform } = require("stream");
const writeStream=fs.createWriteStream("access.log",{flags:"a"});

const server = http.createServer((req, res) => {
    const myURL = new URL(req.url, `http://${req.headers.host}`);
    const path = myURL.pathname;

    
        const log = `${req.method} ${path} ${new Date().toISOString()}\n`;
        writeStream.write(log);

    if (req.method === "GET" && path === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("server is running");
    }
    else if (req.method === "GET" && path === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("This is an about page.");
    }
    else if (req.method === "GET" && path === "/user") {
        let user = {
            name: "ritika",
            role: "Node Mentor"
        };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            user
        }));
    }
    else if(req.method==="POST" && path==="/uppercase"){
        const upper=new Transform({
            transform(chunk,encoding,callback){
                callback(null,chunk.toString().toUpperCase());
            }
        });
        res.writeHead(200, { "Content-Type": "text/plain" });
        req.pipe(upper).pipe(res);
    }
    else if(req.method==="POST" && path==="/vowel"){
        const vowel=new Transform({
            transform(chunk,encoding,cb){
               cb(null,chunk.toString().replace(/[aeiouAEIOU]/g, "*"));
            }
        });
        res.writeHead(200, { "Content-Type": "text/plain" });
        req.pipe(vowel).pipe(res);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});