const fs = require('fs-extra');
const path = require('path');
const {execSync} = require('child_process');


//start building the front-end
console.log('starting to building the front end');
execSync('npm run build',{
    cwd: path.join(__dirname,"front-end"),
    stdio: 'inherit'
});
fs.emptyDirSync('dist/www');
fs.copySync(path.join(__dirname,'front-end/dist/'), path.join(__dirname,'dist/www/'));
//ended building front-end
console.log('finished building the front-end');


//start building the back-end//
console.log('strting to build the back-end');
execSync('npm run build',{
   cwd: path.join(__dirname,'back-end'),
   stdio: 'inherit' 
});
fs.copySync(path.join(__dirname,'back-end/dist'),path.join(__dirname,'dist'));
console.log('finished building the back-end');
//ended building the back-end