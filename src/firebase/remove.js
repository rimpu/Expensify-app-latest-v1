database.ref('age').remove().then(()=>{
    console.log('Age was successfully deleted')
}).catch((err)=>{
    console.log('Failed due to ', err)
})