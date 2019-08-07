database.ref('expenses').on('child_removed',(snapshot)=>{
    console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key , snapshot.val())
})

database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key, snapshot.val())
})