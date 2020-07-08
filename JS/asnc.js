
// Event loop

// setTimeout(()=>{
// console.log('After timeout')
// },2500)


const delay = (callback, wait=1000)=>{
    setTimeout(callback,wait);
}

delay(()=>{
console.log('After 2 second')
},2000)