var promise = require('bluebird');
var fs = promise.promisifyAll(require('fs'));
fs.readFileAsync('./stud.json', 'utf8')
.then(function(file1){
    console.log(file1);
    return fs.readFileAsync('./qastud.json', 'utf8');
})
.then(function(file2){
    console.log(file2);
})
.catch(function(err){
    console.log(err);
})