// fs module
// importfs module
const fs = require("fs");
// callback function
// const read = (err,data)=>{
//     if(err) throw err
//     console.log(data);
// }
// fs.readFile('./log.txt','utf-8',read);

// // utf-8 bites mae convert krega


// readfile is asynchronous thats why the output of below code id first end this is log file
// console.log("first");

// fs.readFile('./log.txt','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data);
// })
// console.log("end");



// console.log("first");
// const data = fs.readFileSync('./log.txt','utf-8');
// console.log(data);
// console.log("end");

// WRITE FILE->asynchronous
// console.log("first");
// const data = 'this is new data';
// fs.writeFile('./output.txt',data,(err)=>{
//     if(err) throw err
//     console.log("file write success")
// })
// console.log("end");


// append function-aynschronous
// console.log("first");
// fs.appendFile('./FS/output.txt',"this is new onw",(err)=>{
//     if(err) throw err
//     console.log("text add successfully")

// })

// delete function
// fs.unlinkSync('./output.txt')

// console.log("end");

//path module
const path =require("path");
//absolute path
// const absolutePath =path.resolve("./log.txt")
// console.log(absolutePath)
// console.log(__dirname)
// console.log(path.basename('./notes/log.txt'))//file ka name ayega
// console.log(path.extname('./notes/log.txt'))//file ka extension dikhayega
// const joinPath=path.join(__dirname,"notes","log.txt");
// console.log(joinPath)
// const pathParse=path.parse(joinPath)
// console.log(pathParse);
const filePath=path.join(__dirname,"log","log.txt")
const data =fs.readFileSync(filePath,"utf-8");
console.log(data)
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
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>bhelcome</h1>")
    res.end("hello from asus")
})

server.listen(3000,()=>{
    console.log("server is running on port",3000)
})