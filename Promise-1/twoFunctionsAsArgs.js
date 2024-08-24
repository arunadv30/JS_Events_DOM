let gotoGoa=(success,failure)=>{
  let acc_bal=100;
  if(acc_bal>=10000){
    success('Go and enjoy')
  }else{
    failure('Bad Luck')
  }
}

gotoGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})

