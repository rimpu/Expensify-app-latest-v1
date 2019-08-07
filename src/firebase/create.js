  database.ref().set({
    name:'Aditi Bose',
    age:24,
    stressLevel:8,
    job:{
        title:'Software engineer',
        company:'Google'
    },
    location:{
        city:'Bengaluru',
        country:'India'
    }
}).then(()=>{
    console.log('Data is saved')
}).catch((e)=>{
    console.log('Error ' , e)
})


database.ref('attributes/height').set('160 cm').then(()=>{
  console.log('Added new height attribute')
}).catch((err)=>{
  console.log('Failed due to' , err)
})

database.ref('attributes/weight').set('45 kgs').then(()=>{
  console.log('Added new weight attribute')
}).catch((err)=>{
  console.log('Failed due to' , err)
})
