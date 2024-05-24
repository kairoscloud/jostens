setTimeout(testFunc1(), 50000);
function testFunc1(){
  console.log("Testing Function Loaded!");
  document.querySelector("#close").style.display = "none";
}
