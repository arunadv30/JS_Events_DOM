class Account{
  acc_Bal=0;
  min_Bal=500;
  deposit_Amount(amount){
    this.acc_Bal += amount;
  }
  withdraw_Amount(amount){
    this.acc_Bal =this.acc_Bal-amount;

  }
  get_Bal(){
    return this.acc_Bal-this.min_Bal;
  }
}
let a1=new Account();
a1.deposit_Amount(5000);

a1.withdraw_Amount(15);
console.log(a1);

console.log(a1.get_Bal())

let a2=new Account();
a2.deposit_Amount(15000);
console.log(a2);

let a3=new Account();
a3.deposit_Amount(50000)
a3.deposit_Amount(150000)
console.log(a3);
