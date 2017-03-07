var fs=require('fs');
fs.readFile('./stud.json', 'utf8', function(err,data1){
    if(err) {
        console.log(err);
    }
    else{
        console.log(data1);
        fs.readFile('./qastud.json', 'utf8', function(err,data2){
           if(err){
               console.log(err);
           } 
            else{
                console.log(data2);
                fs.readFile('./prod.json', 'utf8', function(err,data3){
                   if(err) console.log(err);
                    else
                        console.log(data3);
                });
            }
        });
    }
});