// 1 Function

//Function Declaration
// function great(name) {
//     console.log('salom '+name);
// }
// great('Ahror')

// Function Expression
// const great2= function great2(name) {
// console.log('Salom 2 ',name)
// }

// great2('Abror');
// console.dir(great)

// 2 Anonim function --------------------------------------------------------------------

// let counter=0;
// const interval=setInterval(function () {
//     if (counter===5){
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// },1000)

// 3 Sterlochniy function

// function great(name) {
//     console.log('salom '+name);
// }
//
// const arrow = (name, age) =>{
//     console.log('Salom '+name, age)
// }
// arrow('Ahror')

// 4 Parametri po umalchaniya

// const sum=(a=40,b=a*2)=>{
//     return a+b;
// }
// console.log(sum(41,5))
// console.log(sum())

function sumAll(...all) {
let result=0;
    for (let num of all) {
        result+=num;
    }
    return result;
}
const res=sumAll(1,2,3,4);
console.log(res);