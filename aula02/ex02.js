// Maneira antiga
// var arr = ['Apple' , 'Banana' , 'Orange' , ['tomato']];
// var apple = arr[0];
// var banana = arr[1];
// var orange = arr[2];
// var tomato = arr[3][0];

// com destructuring assigment

// var [apple2,banana2,orange2,[tomato2]] = ['Apple' , 'Banana' , 'Orange' , ['tomato']];
// console.log(tomato2);

//Dá para fazer a mesma coisa com objetos

// var obj = {
//     name: 'Cleso',
//     props:{
//         age: 26,
//         favoriteColor:['Black','Red','blue'] 
//     }
// }

// var { props:{age:age2 , favoriteColor: [color1 , color2]} } = obj;

// console.log(color1)

//destructing em functions

function sum([a,b] = [0,0]){
    return a+b
}

console.log(sum());