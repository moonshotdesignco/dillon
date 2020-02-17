var imgCount = document.getElementsByTagName("img").length;
var lastImage = document.getElementsByTagName("img")[imgCount - 1];

function delayFunc() {
  setTimeout(loadFunc, 800);
}

function loadFunc() {
  document.getElementById("preload").style.display = "none";
  document.getElementById("load").style.display = "unset";
}

lastImage.setAttribute("onload", "delayFunc()");
