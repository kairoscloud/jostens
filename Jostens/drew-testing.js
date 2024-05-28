setTimeout(func1, 5000);
function func1(){
  var x = document.querySelector("#mediaFiles > iframe").contentWindow.document.querySelector("#close");
  console.log(x);
}
