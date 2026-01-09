const {
  readLogFile,
  writeLogFile,
  appendLogFile,
  deleteLogFile
} = require("./app");

writeLogFile("this is new log data\n");
appendLogFile("this is appended log data\n");
readLogFile();
// deleteLogFile();
