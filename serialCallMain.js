var operation = require('./serialCalls.js');
operation(2,function(err,finalresult){
    console.log('started the composite call');
    if(err) {console.log(err);}
    else console.log("final result is " + finalresult);
});