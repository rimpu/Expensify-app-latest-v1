

    database.ref('expenses').on('value',(snapshot)=>{
    const expenses=[]
    snapshot.forEach((childSnapshot)=>{
      expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
      });
    })
    console.log(expenses)
  },(err)=>{
      console.log('Failed due to ', err)
  })
  
  database.ref('expenses/-Ll29Kh-BgtmtAfScEqN').update({
    amount:78
  })
  
  database.ref('expenses/-Ll29Kh-BgtmtAfScEqN').update({
    createdAt: 89
  })