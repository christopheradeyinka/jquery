// function score{
//     var num= prompt('Enter your number')
//     if(num = < 70);
//     console.log('excellent');
// else()
// }
function ore(){
  num = prompt('Enter your number');
  if(num >=75 && num <= 100){
      alert("Excellent")
  }else if(num >=64 && num <=74){
      alert("Very Good")
  }else if(num >=54 && num <=63){
    alert("credit")
}else if(num >=50 && num <=54){
    alert("credit")
}else if(num >=1 && num <=49){
    alert("Fail");
}else{
    return ore();
}
}
ore();
