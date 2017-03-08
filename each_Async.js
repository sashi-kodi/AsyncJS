module.exports=eachAsync;
function eachAsync(collection, iterate, cb){
    var pending = collection.length;
    var calledback=false;
    
    collection.forEach(function(item){
        iterate(item,terminated);
    });
    function terminated(err){
        pending--;
        if(err) callback(err);
        else {
            if(!pending) callback();
        }
    }
    
    
    function callback(err){
        if (!calledback){
            calledback=true;
            cb(err);
        }
        
    }
    
    
}