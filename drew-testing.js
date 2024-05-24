const myInterval = setInterval(testFunc1, 1000);
function testFunc1(){
  var x = document.getElementsByClassName("button").length;
  console.log(x);
}
