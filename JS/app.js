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
    console.log(s, name, age)
    return 'Info about person'
}

const personName = 'Ahor';
const personAge='26';

const output = logPerson`Ism: ${personName} Yoshi: ${personAge}`
console.log(output);



