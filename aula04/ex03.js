EventEmitter

const EventEmitter = require('events')

class Users extends EventEmitter{
    userLogged(){
        this.emit('user logged', data)
    }
}

const emitter = new Users();

emitter.on('user logged' , data =>{
    console.log(data);
})

users.userLogged({ user: 'Celso Henrique'})

