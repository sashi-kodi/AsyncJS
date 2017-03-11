var fs=require('fs');

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();



emitter.on('start_read', function(filename){
    console.log('started reading file ' + filename);
    fs.readFile(filename,'utf-8',function(err,data){
        if(err){ emitter.emit('error', 'error during read operation');}
        else{
            console.log('done reading the file');
            emitter.emit('printContent', data);
        }
        
    });
});

emitter.on('error', function(err){
    console.log(err);
    emitter.emit('done');
});

emitter.on('printContent', function(data){
    console.log("printing file data onto console...");
    console.log(data);
});
emitter.on('done', function(){
    console.log("done processing the file. Bye!");
});

emitter.emit('start_read', './stud.json');