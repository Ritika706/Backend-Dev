const fs = require('fs');
const path = require('path');

let info=0, warn=0, error=0, buffer='';

const stream = fs.createReadStream(path.join(__dirname,'app.log'), {encoding:'utf8'});

stream.on('data', chunk => {
    buffer += chunk;
    const lines = buffer.split('\n');
    buffer = lines.pop();
    lines.forEach(line => { line=line.toUpperCase();
        if(line.includes('INFO')) info++;
        if(line.includes('WARN')) warn++;
        if(line.includes('ERROR')) error++;
    });
});

stream.on('end', () => {
    const l = buffer.toUpperCase();
    if(l.includes('INFO')) info++;
    if(l.includes('WARN')) warn++;
    if(l.includes('ERROR')) error++;
    console.log('INFO:', info, 'WARN:', warn, 'ERROR:', error);
});

stream.on('error', err => console.error(err));
