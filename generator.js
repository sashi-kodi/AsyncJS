var co=require('co');
var fs=require('fs');

co(function* (){
    var file1= yield readFile('./qastud.json');
    console.log(file1);
    var file2= yield readFile('./stud.json');
    console.log(file2);
    console.log('i get printed after both file operations');
    
});
function readFile(filename){
    return function(cb){
        fs.readFile(filename,'utf8', cb);
    }
}