
const fs = require("fs");
const logFile = "./logFile.txt";
function readLogFile() {
  fs.readFile(logFile, "utf-8", (err, data) => {
    if (err) throw err
    console.log(data);
  });
}



/// write file
function writeLogFile(data) {
  fs.writeFile(logFile, data, (err) => {
    if (err) throw err;
    console.log("file written successfully");
  });
}

// append file
function appendLogFile(data) {
  fs.appendFile(logFile, data, (err) => {
    if (err) throw err;
    console.log("data appended successfully");
  });
}

// delete file
function deleteLogFile() {
  fs.unlink(logFile, (err) => {
    if (err) throw err;
    console.log("file deleted successfully");
  });
}
module.exports = {
  readLogFile,
  writeLogFile,
  appendLogFile,
  deleteLogFile
};