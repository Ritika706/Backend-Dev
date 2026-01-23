const fs = require('fs');


//read file
fs.readFile('file.txt', 'utf-8',(err,data)=>{
    if(err){
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

//write file
const content = 'Hello, this is sample content!';
fs.writeFile('output.txt', content, 'utf-8',(err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully');

});

//append file

const appendContent = '\nThis is appended content.';
fs.appendFile('log.txt',appendContent,'utf-8',(err)=>{
    if (err) throw err;
console.log('Content appended');
});

//delete file
fs.unlink('filetodelete.txt', (err) => {
if (err) {
console.error('Error deleting file:', err);
return;
}
console.log('File deleted successfully');
});

//copy files
fs.copyFile('file.txt', 'destination.txt', (err) => {
if (err) {
console.error('Error copying file:', err);
return;

}
console.log('File copied successfully');
});

fs.readdir('.',(err,files)=>{
    if(err){
        console.error("error listing  directory:",err);
        return;
    }
    files.forEach(file=>console.log(file));
    console.log('Directory listed successfully');
});
