var fs=require('fs');

function processfile1(err,data){
    if(err) console.log(err);
    else {
        console.log(data);
        fs.readFile('./qastud.json','utf8',processFile2);
    }
    
    
}
function processFile2(err,data){
     if(err) console.log(err);
    else {
        console.log(data);
        fs.readFile('./prod.json','utf8',processFile3);
    }
}
function processFile3(err,data){
     if(err) console.log(err);
    else {
        console.log(data);
        
    }
}
fs.readFile('./stud.json', 'utf8',processfile1);
function handlingError(cb){
    
}