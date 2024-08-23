/*Spread operator-array/objects:
      extract and copy array elements and copy into new array
      let users=[1,2,3,4]
      let employees=[...users]
      => arrays - allows duplicates
      => objects - does not allows duplicates
 */

      let a=[10,20,30,40]
      let b=[30,40,50]
      let c=[...a, ...b]
      console.log(c);   


