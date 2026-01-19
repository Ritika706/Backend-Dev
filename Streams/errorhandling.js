const {error}=require("console")
// console.log("first")
// try{ //jo bhi code hoga vo try m daalna
// throw new error("there is something wrong")
// }catch(error){ //jo bhi error hoga vo catch m dalna h
//     console.log(error);
// }
// console.log("end")

const http=require("http")
const server=http.createServer((res,req)=>{
    console.log(req.url)
    throw new error("there is something wrong")
    res.end("server is running")
})
server.listen(3000,()=>{
    console.log("server is running")
})