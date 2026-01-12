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