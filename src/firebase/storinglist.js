
  const expenses = 
  [{
      description:'Complete the current lecture',
      'note':'Tuesday',
      amount:0,
      createdAt:0
    },{
        description:'Eat food',
        'note':'Tuesday',
        amount:100,
        createdAt:0
      },{
        description:'Go back home',
        'note':'Tuesday',
        amount:0,
        createdAt:0
      }]

database.ref('expenses').push(expenses[0])
database.ref('expenses').push(expenses[1])
database.ref('expenses').push(expenses[2])

database.ref('expenses').once('value').
then((snapshot)=>{
    console.log(snapshot.val())
}).catch((err)=>{
    console.log('Failed due to ', err)
})

