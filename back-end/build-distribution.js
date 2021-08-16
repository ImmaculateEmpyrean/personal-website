const fs = require('fs-extra');
const path = require('path');

fs.emptyDirSync(path.resolve(__dirname,"dist"));
fs.copySync(path.resolve(__dirname,"src"),path.resolve(__dirname,"dist"));