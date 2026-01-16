const fs=require("fs");
const http=require("http");
//stream se data chunks m ata h , jisse memory m load na ho bhot load pdta h 
//without stream method
// fs.readFile('./output.txt',"utf-8",(err,data)=>{
//     console.log(data);
// })

// const readStream=fs.createReadStream("./output.txt",{
//     highWaterMark:64*1024 //highwatermark buffer ka size h mtlb agr data 100mb ka h to phele 64 krega then 64 alag ...
// })
// on event listen krega data ko aur chunks m divide krega
//readable form m data read krne k liye tostring lgaenge
// readStream.on("data",(chunk)=>{    
// console.log(chunk.toString())
// })
// const writeStream=fs.createWriteStream("./info.txt")
// writeStream.write("\nThis is some text")
// writeStream.write("\nThis is some text")
// writeStream.write("\nThis is some text")
// writeStream.end()
// writeStream.on("finish",()=>{
//     console.log('writing finish')
// })
// const writeStream=fs.createWriteStream("./info.txt",{  //khud se file bn jaegi 
//     flags:"a" //append krega agar ise hta denge to overwrite krdega
// })
// writeStream.write("\nThis is some text")
// writeStream.write("\nThis is some text")
// writeStream.write("\nThis is some text")
// writeStream.end()
// writeStream.on("finish",()=>{
//     console.log('writing finish')
// })

//uppercase changing
const readStream=fs.createReadStream("./log.txt")
const writeStream=fs.createWriteStream("./upper.txt")
readStream.on("data",(chunk)=>{
let data=chunk.toString().toUpperCase();
writeStream.write(data);
})
readStream.on("end",()=>{
    writeStream.end();
})