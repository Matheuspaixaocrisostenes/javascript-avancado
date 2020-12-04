// Jeito antigo 
// function sum(a,b){
//     var value = 0;
    
//     for(var i = 0; i < arguments.length;i++){
//         value += arguments[i];
//     }
//     return value
// }

// console.log(sum(7,5,6,4,5,5))

// Maneira nova com o rest operator ...

// function sum(...args){
//     return args.reduce((acc,value) => acc + value, 0)
// }

// console.log(sum(5,5,5,5))

//outra maneira:

// const sum = (a,b, ...rest) => {
//     console.log(a,b, rest);
// }

// const multiply = (...args) => Args.reduce((acc, value) => acc * value,1) 

// console.log(sum(5,5,5,5))

// maneira antiga antes do spread ele tem a mesma sintaxe do rest ou seja ...
// const multiply = (...args) => args.reduce((acc, value) => acc * value,1) 
// const sum = (...rest) => {
//     return multiply.apply(undefined, rest);
// }

// console.log(sum(5,5,5,5))

// com o spread :

// const multiply = (...args) => args.reduce((acc, value) => acc * value,1) 
// const sum = (...rest) => {
//     return multiply(...rest);
// }

// console.log(sum(5,5,5,5))

// outro 
// const str = 'Digital Innovation One';

// function logArgs(...args){
//     console.log(args);
// }

// logArgs(...str);

// Usando com arrays
//maneira antiga

// const str = 'Digital Innovation one';
// const arr = [1,2,3,4,5,6]

// function logArgs(a,b,c){
//     console.log(a,b,c);
// }

// const arr2 = arr.concat([7,8,9]); 
// console.log(arr2);

//Maneira Nova:

// const arr = [1,2,3,4,5,6]

// function logArgs(a,b,c){
//     console.log(a,b,c);
// }

// const arr2 = [...arr, 7,8,9]; 
// console.log(arr2);

// spread em objetos literais

const arr = [1,2,3,4,5,6]
const arrClone = [...arr]; 

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2:'Hello'
}

console.log(obj2);