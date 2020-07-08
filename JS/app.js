// window.prompt('Ism')
// window.confirm('Ism')
const heading = document.getElementById('hello')
// const heading_2=document.getElementsByTagName('h2')[0];
// const heading_2=document.getElementsByClassName('h2-class')[0];
// const heading_2=document.querySelector('.h2-class');
const heading_2=document.querySelector('#h2-class');

const h2list = document.querySelectorAll('h2')
const heading3 = h2list[h2list.length-1];
console.log(h2list[0]);
// console.log(heading_2);


setTimeout(() => {
add(heading, 'heading1', 'green');
}, 2000);
setTimeout(() => {
    add(heading_2, 'heading2', 'yellow','4rem');
}, 4000);

setTimeout(() => {
    add(heading3, 'heading3');
}, 3000);

const add = ((node, text, color='red', fontSize) => {
    node.textContent = text;
    node.style.color = color;
    node.style.textAlign = 'center';
    node.style.backgroundColor = 'black';
    node.style.padding = '2rem'
    if (fontSize){
        node.style.fontSize=fontSize;
    }
})

heading.onclick=(()=>{
    if (heading.style.color==='green'){
        heading.style.color='#000'
        heading.style.backgroundColor='#fff'
    }else {
        heading.style.color='green'
        heading.style.backgroundColor='#000'
    }
})

heading_2.addEventListener('dblclick', ()=>{
    if (heading_2.style.color==='yellow'){
        heading_2.style.color='#000'
        heading_2.style.backgroundColor='#fff'
    }else {
        heading_2.style.color='yellow'
        heading_2.style.backgroundColor='#000'
    }
})
