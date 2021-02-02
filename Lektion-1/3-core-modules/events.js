const EventEmitter = require('events');

class Emitter extends EventEmitter {
    greet(name) {
        this.emit('greet', name)
    }
}


const myEmitter = new Emitter()



/* myEmitter.on('hej', () => console.log('Eventet hej kördes'));
myEmitter.on('då', () => {
    console.log('Eventet då kördes')
});

myEmitter.emit('hej');
myEmitter.emit('då'); */

myEmitter.on('greet', data => {
    console.log('Hej ' + data)
})

myEmitter.greet('Joachim')
myEmitter.greet('Sofia')
myEmitter.greet('Skruttis')