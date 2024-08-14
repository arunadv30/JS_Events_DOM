class Account{
  open_Account(){
    console.log("Account opened successfully")
  }
  deposit_Amount(){
    console.log("Amount Deosited")
  }
  withdrawal_Amount(){
    console.log("Insufficient Bal")
  }
  get_Bal(){
    console.log("Server Busy")
  }
  get_Statement(){
    console.log("pay 50 INR")
  }
  close_Account(){
    console.log("balance negative")
  }
}

let a1 = new Account(); //a1 is object or reference variable to access class members outside the class
a1.open_Account();
a1.deposit_Amount();
a1.withdrawal_Amount();
a1.get_Bal();
a1.get_Statement();
