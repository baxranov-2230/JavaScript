// 1 Number-----------------------------------------------------------------------

// const num = 42; // integer
// const float=42.5; //float
// const pow=10e3; // 1000
// console.log(pow);
//
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Math.pow(2,53)-1);
// console.log(Number.MIN_SAFE_INTEGER);
//
// const stringInt = '40';
// const stringFloat = '40.42';
//
// console.log(+stringInt+2)
// console.log(Number.parseInt(stringInt)+2)
// console.log(Number(stringInt)+2)
// console.log(parseInt(stringInt)+2);
//
// console.log(parseFloat(stringFloat)+2);


// console.log(0.4+0.2)
// console.log((0.4+0.2).toFixed(1))

// 2 BigInt---------------------------------------------------------------------

// 3 Math------------------------------------------------------------------------

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.sqrt(25))
// console.log(Math.pow(3,3))
// console.log(Math.abs(-42))
// console.log(Math.max(42,50,65,85,20));
// console.log(Math.min(42,50,65,85,20));
// console.log(Math.floor(4.9)); // pastga qarab yaxlitlaydi
// console.log(Math.ceil(4.9)); // tepaga qarab yaxlitlaydi
// console.log(Math.round(4.3)); // nuqtadan keyingi songa qarab yaxlitlaydi
// console.log(Math.trunc(4.9)); // nuqtadan so'ng kesib tashlaydi
// console.log(Math.random());

// 4 Example -----------------------------------------------------------------

function getRandomBetween(min, max) {
return Math.random()*(max-min)+min;
}

console.log(getRandomBetween(10, 42).toFixed(0));
