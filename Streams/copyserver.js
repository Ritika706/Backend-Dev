const fs=require("fs");
const readStream=fs.createReadStream("./output.txt")
const writeStream=fs.createWriteStream("./log.txt")
//shortcut trick
readStream.pipe(writeStream)

// readStream.on("data",(chunk)=>{
//     let data=chunk.toString();
//     writeStream.write(data);
// })
// readStream.on("end",()=>{
//     writeStream.end();
// })

