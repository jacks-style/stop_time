let myInt = setInterval(timer, 1000);
function timer() {
  const data = new Date();
  const data_div = document.getElementsByClassName("timeNow");
  data_div[0].innerHTML = data.toLocaleTimeString();
}
function stopInt() {
  clearInterval(myInt);
  document.getElementById("stop").style.display = "none";
  document.getElementById("start").style.display = "initial";
}
function startInt() {
  myInt = setInterval(timer, 1000);
  document.getElementById("stop").style.display = "initial";
  document.getElementById("start").style.display = "none";
}
