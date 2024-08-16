class Parent{
  constructor(){
    console.log("Parent Constructor")
  }
  m1(){
    console.log("Parent m1 method")
  }
}
class Child extends Parent{
  constructor(){
    super(); //invoking the parent class constructor
    console.log("child class constructor")
  }
  m2(){
    console.log("child class m2 method")
  }
}
let c1 = new Child();