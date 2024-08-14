fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  console.log(response.data)
  return response.json()
})
.then((data)=>{
  //console.log(typeof(data))
  console.log(data)
})
.catch((err)=>{
  console.log(err.message)
})