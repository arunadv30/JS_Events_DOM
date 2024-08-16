class P{
  constructor(){
    console.log("GA")
  }
}
class C extends P{
  constructor(){
    super(); //mainly used to pass values to the parent class or invoking the super class in child class
    console.log("GE")
  }

}
new C();