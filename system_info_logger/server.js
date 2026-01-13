//System Information Logger
//Create an application that logs system information (CPU, memory, platform) to a file every 5 seconds using the os and fs modules.
const fs=require('fs')
const os=require ('os')

function logSystemInfo() {
  const cpuCores = os.cpus().length;
  const totalMemory = (os.totalmem() / (1024 * 1024)).toFixed(2);
  const freeMemory = (os.freemem() / (1024 * 1024)).toFixed(2);
  const platform = os.platform();
  const time = new Date().toLocaleString();

  const data =
    "Time: " + time + "\n" +
    "Platform: " + platform + "\n" +
    "CPU Cores: " + cpuCores + "\n" +
    "Total Memory: " + totalMemory + " MB\n" +
    "Free Memory: " + freeMemory + " MB\n" +
    "-----------------------------\n";

  fs.appendFile('system.log', data, function (err) {
    if (err) {
      console.log("Error writing to file");
    }
  });
}

setInterval(logSystemInfo, 5000);

console.log("System Information Logger Started");