//maneira classica de escrever objetos literais:
// var obj = {
//     prop1: 'Digital Innovation One'
// };

// ou
// var prop1 = 'Digital Innovation One'

// var obj = {
//     prop1: prop1
// };

// console.log(obj)

// agora podemos fazer isso:

// var prop1 = 'Digital Innovation One'

// var obj = {
//     prop1
// };

// console.log(obj)

// Também podemos fazer isso:

// function method1(){
//     console.log('method called');
// }

// var obj = {
//     method1
// };

// obj.method1();

// outra coisa:
var propName = 'test';

var obj = {
    [propName + 'concat']: 'prop value'
}

console.log(obj)