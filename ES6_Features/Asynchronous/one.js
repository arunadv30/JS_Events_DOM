/* Synchronous: Blocking some other's request;
                Executing the requests one after the other.

   Asynchronous: Executes the requests simultaneously n number of reqests.
*/

setTimeout(()=>{
  console.log('R1')
},10000)
setTimeout(()=>{
  console.log('R2')
},1000)
setTimeout(()=>{
  console.log('R3')
},3000)
setTimeout(()=>{
  console.log('R4')
},2000)