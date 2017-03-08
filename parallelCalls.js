var messages =['message1', 'message2', 'message3'];
var eachAsync = require('./each_Async');

eachAsync(messages, send, done);
function send(message, cb){
    var err= Math.random()>0.8? new Error('whaaa'):null;
    setTimeout(cb,1000, err);
    
}
function done(err){
    if(err) console.log(err);
    else console.log('all messages have been sent');
}