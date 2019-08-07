const onValueChange = database.ref().on('value',(snapshot)=>{
    const {name,job} = {...snapshot.val()}
    console.log(`${name} is a ${job.title} at ${job.company}`)
})

database.ref().off('value',onValueChange)