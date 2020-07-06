// var name = 'Ahror';
// const lastName = 'Baxranov';
// let age = '26';
// const isProgrammer = true;
//
// console.log(typeof age);

//6 Usloviya operatore----------------------------------------------------------------------

// const courseStatus = 'ready';
//  if (courseStatus==='ready'){
//      console.log("Kurs tayyor")
//  } else if (courseStatus==='padding'){
//      console.log('hali bor')
//  } else {
//      console.log('kurs hali plinmadi');
//  }
// if (isReady){
//     console.log('kurs tayyor');
// } else {
//     console.log('kurs hali tayyor emas');
// }

//
// const isReady=true;
//
// isReady ? console.log('tayyor'):console.log('tayyor emas');

// 7 bulevaya logika ---------------------------------------------------------------------
// &&  ||  true false !true !false !!true == true

// 8 function -----------------------------------------------------------------------------

// function calculateAge(year) {
// return 2020-year;
// }
//
// // const myAge=calculateAge(1994);
// console.log(calculateAge(1994));
//
// function logInfoAbout(name, year) {
// const age=calculateAge(1994);
// console.log(name+' ismli odamn '+age+' yoshda');
// }
//
// logInfoAbout('Ahror',1994);

//9 massive --------------------------------------------------------------------------------

// const cars=['1','2','3'];
// console.log(cars);
//
// cars[0]='4';
// cars[cars.length]='5';
// console.log(cars);
// 10 array -------------------------------------------------------------------------------

// const cars=['A','H','R','O','R'];
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }
//
// for (let car of cars){
//     console.log(car)
// }

// 11 Object

const person = {
    firstName: 'Ahror',
    lastName: 'Baxranov',
    year: 1994,
    languages: ['UZ', 'RU', 'ENG'],
    hasWife: false,
    great: function () {
        console.log('great')
    }
}

console.log(person.firstName);
console.log(person['lastName']);
const key = 'year';
console.log(person[key])
person.great();