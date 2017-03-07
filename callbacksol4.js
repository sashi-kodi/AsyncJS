var fs=require('fs');

function processfile1(data){
    
        console.log(data);
        fs.readFile('./qastud.json','utf8',fileHandler(processfile2));
    }
    
    

function processfile2(data){
    
        console.log(data);
        fs.readFile('./prod.json','utf8',fileHandler(processfile3));
    
}
function processfile3(data){
    
        console.log(data);
        
    }

fs.readFile('./stud.json', 'utf8',fileHandler(processfile1));

function fileHandler(cb){
    return function(err,result){
        if(err) console.log(err);
        else cb(result);
    
    }
    
}