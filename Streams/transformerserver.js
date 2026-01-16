const fs=require("fs");
const{Transform}=require("stream");
const upper=new Transform({
    transform(chunk,encoding,cb){
        const modifiedData=chunk.toString().toUpperCase();
        cb(null,modifiedData)
    }
})
const removeVowel=new Transform({
    transform(chunk,encoding,cb){
        const modifiedData=chunk.toString().replace(/[aeiouAEIOU]/g, "*");
        cb(null,modifiedData)
    }
})
const readStream=fs.createReadStream('./log.txt')
const writeStream=fs.createWriteStream("./infoutput.txt")
readStream
.pipe(upper) 
.pipe(removeVowel)//isko test processing bolte h
.pipe(writeStream)
//pehle data read hoga log file se then upper m jaega joki transfor object h uppercase m krega fir write krega infooutput m ise pipelining bolte h
//transform connect two stream for pipelining using pipe