// callbacks
//  function doSomething(callback){
//     setTimeout(function() {
//         // Did something
//         callback('first data')
//     }, 1000);
// }

// function doOtherThing(callback){
//     //Did other Thing
//     setTimeout(function() {
//         callback("Second data")
//     }, 1000);
// }

// function doAll(){
//     try{
//         doSomething(function(data){
//             var processeData = data.split('');
//             try{
//             doOtherThing(function(data2){
//                 var processeData2 = data2.split('');
//                 try{
//                 setTimeout(function(){
//                     console.log(processeData, processeData2);
//                 }, 1000);
//             }catch(err){
//                 //handle error 
//             }
//             });
//         }catch(err){
//             // handle error     
//         }   
//         });
//     }catch(err){
//     //handle error
//    }
// }

// doAll()

// Promisses 
const doSomethingPromisse = () =>
 new Promise((resolve , reject) => {
    setTimeout(function(){
        //did something
        resolve('first data');
    }, 1000);
})

const doOtherThingPromisse = () =>
 new Promise((resolve , reject) => {
    setTimeout(function(){
        //did something
        resolve('Second data');
    }, 1000);
})

Promise.all([doSomethingPromisse(),doOtherThingPromisse()]).then((data) => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err);
})
//estados das promisses
// pending
//fullfilled
//reject