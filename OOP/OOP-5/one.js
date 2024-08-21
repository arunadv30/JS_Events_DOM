class Account{  // super class
  acc_Id;
  acc_Name;

  constructor(id,name){
    this.acc_Id=id;
    this.acc_Name=name;
  }
} 

class SA extends Account{ // parent or derived class
  acc_Bal=0;
  min_Bal=500;
  constructor(id,name,amount){
    super(id,name)
    this.acc_Bal=amount;
  }
  get_Bal(){
    return this.acc_Bal - this.min_Bal;
  }

}
class CA extends Account{
  acc_Bal=0;
  min_Bal=5000;
  constructor(id,name,amount){
    super(id,name)
    this.acc_Bal=amount;
  }
}
let sal=new SA(101,"Rahul",5000)
console.log(sal)

let sal2=new CA(101,"Sonia",15000)
console.log(sal2)
console.log(sal.get_Bal())