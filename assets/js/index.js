function control()
{
var firstNumber=document.getElementById("firstNumber").value;
var secondNumber=document.getElementById("secondNumber").value;
if (secondNumber===0){
alert("impossible de divisé par 0");
}else{
  result=firstNumber%secondNumber;
  alert(`le resultat du modulo est ${result}`);
}
}
