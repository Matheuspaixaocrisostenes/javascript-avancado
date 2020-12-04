// aula de tratamento de erros

class customError extends Error{
    constructor({message, data}){
        super(message);
        this.data = data
    }
}

try{
    const name = "Matheus Paixão";
    const myError = customError({
        message: 'Custom Message on custom error',
        data :{
            type: 'Server error'
        }
})

}catch(err){
    console.log( err);
    console.log(err.data);
}finally{
    console.log('Keep going...');
}
