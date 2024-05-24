setTimeout(func1, 5000);
function func1(){
  eval(testFunc1);
  console.log("Eval Loaded!");
}
function testFunc1(){
  var x = document.getElementById("close");
  console.log(x);
}
