
const EventEmitter = require('events');
//const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter
{
    log(message){
        console.log(message);    
        //Raise an evemt
        this.emit('messageLogged' ,{ id: 1 ,url:'http://www.farukaslan.com' } );    
    }
}

module.exports  = Logger;
//module.exports.endPoint = url;

