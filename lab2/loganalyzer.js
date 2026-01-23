const fs = require('fs');
const readline = require('readline');

// Log file ka naam
const logFile = 'app.log';

// Counters
let infoCount = 0;
let warnCount = 0;
let errorCount = 0;
let totalLines = 0;

// Stream se file read karna
const fileStream = fs.createReadStream(logFile, { encoding: 'utf8' });

fileStream.on('error', (err) => {
  console.log('File read error:', err.message);
});

// Line-by-line read
const rl = readline.createInterface({
  input: fileStream
});

rl.on('line', (line) => {
  totalLines++;

  if (line.includes('INFO')) infoCount++;
  else if (line.includes('WARN')) warnCount++;
  else if (line.includes('ERROR')) errorCount++;
});

rl.on('close', () => {
  console.log('\n--- Log Summary ---');
  console.log('Total Lines:', totalLines);
  console.log('INFO:', infoCount);
  console.log('WARN:', warnCount);
  console.log('ERROR:', errorCount);
});
