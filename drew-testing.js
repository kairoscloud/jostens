const myTimer = setTimeout(testFunc1(), 10000);
function testFunc1(){
  console.log("Testing Function Loaded!");
  document.querySelector("#close").style.display = "none";
}
