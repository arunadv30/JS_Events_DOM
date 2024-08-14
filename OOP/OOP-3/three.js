
class Account{
 
  min_bal=500;
  
  constructor(id,name,amount) {
    this.acc_id=id;
    this.acc_name=name;
    this.acc_bal=amount;
  }
  open_Account(){
    console.log("Account opened successfull")
  }
  deposit_Amount(amount){
    this.acc_bal = this.acc_bal + amount
    
  }
  withdrawl_Amount(amount){
  this.acc_bal = this.acc_bal - amount
}
  
  get_Bal(){
    return this.acc_bal - this.min_bal
  }
  close_Account(){
    console.log("Account closed")
  }

}

let a1= new Account(101,'Rahul',5000)
a1.open_Account()
a1.deposit_Amount(300)
a1.deposit_Amount(150)
a1.deposit_Amount(15)

console.log(a1.get_Bal())

a1.withdrawl_Amount(15)
console.log(a1.get_Bal())
