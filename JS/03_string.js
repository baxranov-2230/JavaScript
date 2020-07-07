// const name = 'Ahror'
// const age = 26;

// const output = 'Salom meni ismim '+name+' va yoshim ' + age+' yoshda';
// const output=`Salom meni ismim ${name} va yoshim ${age} yoshda`
// console.log(output);

// const output = `
// <div>This is div</div>>
// <p>This is p</p>>
// `
// console.log(output);
//   const name = 'Ahror'
// console.log(name.length);
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('o'));
// console.log(name.startsWith('Ah'));
// console.log(name.endsWith('r'));
// console.log(name.repeat(3));
//
// const string = '   password  ';
// console.log(string.trim());
// console.log(string.trimLeft());
// console.log(string.trimRight());

function logPerson(s, name, age) {
  if (age<0){
      age='hali togilmagan';
  }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Ahor';
const personName2 = 'Abor';
const personAge='26';
const personAge2='-10';

const output = logPerson`Ism: ${personName} Yoshi: ${personAge}!`
const output2 = logPerson`Ism: ${personName2} Yoshi: ${personAge2}!`
console.log(output);
console.log(output2);



