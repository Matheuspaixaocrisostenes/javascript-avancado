// Symbols 

const uniqueId = Symbol('hello')

Symbol.iterator 

const arr = [1,2,3,4];
const str = 'Digital Innovation One'

const obj = {
    values: [1,2,3,4],
    [Symbol.iterator]() {
        let i = 0;

        return{
            next: () =>{
                i++;

                return {
                    value: this.values[i-1],
                    done: i> this.values.length
                };
            }
        };
    }
};

// Generators 

// function* hello(){
//     console.log('hello');
//     yield;
//     console.log('from');
//     yield;
//     console.log('function');
// }

// const it = hello()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//se eu quiser retornar um valor a cada iteração:
// function* hello(){
//     console.log('hello');
//     yield 1;
//     console.log('from');
//     const value = yield 2;
//     console.log(value);
// }

// const it = hello()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next('outside!'));

// Com numeros infinitos

function* naturalNumbers(){
    let number = 0;
    while (true){
        yield number;
        number++
    }
}

const it = naturalNumbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());
