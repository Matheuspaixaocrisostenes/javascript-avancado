// //funções antigas 
// function sumOld(a,b) {
//     return a + b
// }

//arrow functions 
// 1° modo de escrever
// var sum = (a,b) => a + b
// console.log(sum(5,15))

// 2° modo usar se tiver apenas um parametro
// var sum = a => a+5
// console.log(sum(5,15))

//3° modo para retornar um objeto
// var createObj = () => ({ test: 123});
// console.log(createObj());

//Para Criar um função costrutora não dá para fazer isso em arrow function
// function car(){
//     this.foo = 'bar'
// }

// console.log(new car())     

var obj = {
    showContext: function showContext(){
        //this = obj

        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    }, 
    log: function log(value){
        console.log(value)
    }
};

obj.showContext();