database.ref().once('value')
.then((snapshot)=>{
    const value = snapshot.val()
    console.log(value)
}).catch((err)=>{
    console.log(err)
})

database.ref('job/company').once('value')
.then((snapshot)=>{
    const value = snapshot.val()
    console.log(value)
}).catch((err)=>{
    console.log(err)
})