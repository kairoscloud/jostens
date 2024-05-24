alert("Code version 9.0");
const myTimer = setTimeout(testFunc2, 10000);
function testFunc2(){
  alert("Timer done");
  document.querySelector("#app > div > div > div > div > div.mx-4.mt-5.hl-card").remove();
}

