
const cars=['matiz', 'damas', 'nexia', 'cobalt'];
// const people=[
//     {name: 'Ahror', budget: 4200},
//     {name: 'Abror', budget: 4000},
//     {name: 'Asror', budget: 3000}
// ]

const fib = [1,1,2,3,5,8,13];

// Method

// cars.push('Tico');
// cars.unshift('lacete');
// console.log(cars)
// const firstItem=cars.shift();
// const lastItem=cars.pop();
// console.log(firstItem);
// console.log(lastItem);
// console.log(cars)

// console.log(cars.reverse()); // orqadan boshlash

// console.log(cars.indexOf('damas'))

// 1 Topshiriq
// const text='Salom, Javascriptni organamiz'
// const reverseText=text.split('').reverse().join();
// console.log(reverseText);

// const index = people.findIndex(function (person) {
// return person.budget===3000;
// })
// const person = people.find(function (person) {
//     return person.budget===3000;
// })
//
// console.log(person);
// ---------------------------------------------------------------------------------
// let findPerson;
//
// for (let person of people) {
//     // console.log(person);
//     if (person.budget===3000){
//         findPerson=person;
//     }
// }
//
// console.log(findPerson);
//-----------------------------------------------------------------------
// console.log(cars.includes('matiz')) // bor yuqligini bildirish

//-----------------------------------------------------------------------------------
// const upperCaseCars=cars.map(car => {
//     return car.toUpperCase();
// })
// console.log(upperCaseCars);
//----------------------------------------------------------------------------------

const people=[
    {name: 'Ahror', budget: 4200},
    {name: 'Abror', budget: 4000},
    {name: 'Asror', budget: 3000}
]

// const allBudget=people.reduce((acc, person)=>{
//     if (person.budget>3000){
//         acc+=person.budget;
//     }
//     return acc;
// },0)
const allBudget=people
    .filter(person=>person.budget>3000)
    .reduce((acc, person)=>{
    acc+=person.budget;
    return acc;
},0)

console.log(allBudget);