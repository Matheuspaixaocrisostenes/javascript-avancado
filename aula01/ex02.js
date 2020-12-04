//atigamente 
// function multiply(a,b){
    // b = typeof b === 'undefined' ? 1 : b; 
//     return a * b
// }

// console.log(multiply(5));

//atualmente podemos atribuir valores padrões para os parametros
// function multiply(a=1,b=1){
//     return a * b;
// }

// console.log(multiply(5));

// Lazy evaluation
function ramdomNumber(){
    console.log('generation a random Number.....');
    return Math.random() * 10;
}

function multiply(a,b= ramdomNumber()){
    return a * b;
}

console.log(multiply(5));