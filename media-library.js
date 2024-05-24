alert("Code version 10.0");
const myTimer = setTimeout(testFunc2, 10000);
function testFunc2(){
  alert("Timer done");
  //window.eval(document.querySelector("#app > div > div > div > div > div.mx-4.mt-5.hl-card").remove());
  window.eval(document.querySelector("mx-4.mt-5.hl-card").remove());
  alert("Evaluation done");
}
