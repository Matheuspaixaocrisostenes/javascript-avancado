// Symbols 

// const uniqueId = Symbol('Hello');

// const obj = {
//     [uniqueId]: 'Hello'
// };

// para obter as propriedades do symbol é assim:
// Object.getOwnPropertySymbols(obj);

// well known symbols:
Symbol.split
Symbol.iterator
Symbol.toStringTag

// const obj = {
//     [Symbol.iterator](){

//     }
// }


const arr = [1,2,3,4]
const str = 'Digital Innovation One'

// const it = arr[Symbol.iterator]();
//para percorrer os valores :

// while (true){
//     let {value ,done} = it.next();
    
//    if(done){
//        break;
//    }
//    console.log(value);

// }

//ou 

// for(let value of str){
//    console.log(value);
// }

// podemos usar o spread 

// let arr2 = [...str, ...arr]
// console.log(arr2);

// console.log(arr[Symbol.iterator]().next());

const obj = {
    values : [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;
        return{
            next: () =>{
                i++;
                return{
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const arr2 = [...obj];