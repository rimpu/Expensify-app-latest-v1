const promise = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve('Passed')
    // reject('failed')
},3000)
})

console.log('before')
promise.then((data)=>{ //asynchronous call
    console.log(data)
    return '1' //promise chaining
}).then((data1)=>{
    console.log(data1)
},(error)=>{
    console.log(error)
})

console.log('after')