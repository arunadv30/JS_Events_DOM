function changeColor1(){
  //alert("Test case 123")
  document.getElementById("btn1").style.backgroundColor="green"
}

function changeColor2(){
  document.getElementsByTagName('button')[1].style.backgroundColor="blue"
}
function changeColor3(){
  document.querySelector(".abc").style.backgroundColor="pink"
}
function changeColor4(){
  document.getElementById("inputTag").style.backgroundColor="yellow"
}
function changeCase(){
  let userName=document.getElementById("blur").value;
  alert(userName)
  document.getElementById("blur").value=userName.toUpperCase();
}