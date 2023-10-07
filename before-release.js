// read file and make object
const fs = require('fs');
let content = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = content.version;

const parts = version.split('.');

const newVersion = `${parts[0]}.${parts[1]}.${parseInt(parts[2]) + 1}`;
content.version = newVersion;
//write file
fs.writeFileSync('package.json', JSON.stringify(content));