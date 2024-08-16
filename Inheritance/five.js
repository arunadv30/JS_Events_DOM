class P{
  constructor(){
    console.log("GA")
  }
}
class C extends P{
  // a default constructor and super is executed by default if not declared.
  // firlstly child class is executed and parent class is invoked with super()

}
new C();