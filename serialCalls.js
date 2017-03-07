module.exports= function composedCall(args,cb){
    call1(args,processHandler(function(result1){
        console.log("result1 :"+result1);
        call2(args, processHandler(function(result2){
            console.log("result2 :"+result2);
            call3(args,processHandler(function(result3){
                console.log("result3 :"+result3);
                cb([result1,result2,result3]);
            }));
        }));
        
    }));

          
        function processHandler(fn){
        return function(err,data){
            if(err) {
                     console.log("err");
                     cb(err);
                    }
            else{
                fn(data);
            }
            
        };
    }

function call1(arg,fn){
   
   setTimeout(fn,1000,null,arg);
}

function call2(arg,fn){
    console.log('inside call2');
    
   setTimeout(fn,1000,null,arg*arg);
}
function call3(arg,fn){
    console.log('inside call3');
   
   setTimeout(fn,1000,null,arg*arg*arg);
}
    
    };