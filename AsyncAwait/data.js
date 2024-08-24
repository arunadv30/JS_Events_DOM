
let employees =[
  {id:101, name:"Rahul",Sal:45000},
  {id:102, name:"Sonia",Sal:55000}
]

let createEmployee=(emp)=>{ 
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      let db_flag = true;
      db_flag===true? resolve("Data Inserted"): reject("Failed")
      employees.push(emp);
    },4000)
  })
}

let getEmployees=()=>{
  setTimeout(()=>{
    let rows="";
  for(emp of employees){
    rows=rows +  `<tr>
                      <td>${emp.id}</td>
                      <td>${emp.name}</td>
                      <td>${emp.Sal}</td>
      	          </tr>`
  }
  document.getElementById("abc").innerHTML=rows
  },1000)
}

let lunchTime=async()=>{
  await createEmployee({id:103,name:'Priyanka',Sal:65000})
  getEmployees()
}
lunchTime()
