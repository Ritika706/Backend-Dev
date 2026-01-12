const fs= require('fs');

fs.readFile('log.txt','utf-8',(err,data)=>{
    if(err){
       console.log('Error reading file:', err);
       return;
    }
    const words=data.split(" ");
    const count=words.length;

    fs.writeFile('output.txt',String(count),(err)=>{
     if (err) {
      console.log("File write error");
    } 
    else {
      console.log("Word count written successfully");
    }
    });
});
