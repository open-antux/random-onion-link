bool = true;

function generateLink(){
  var charset = "qwertyuiopasdfghjklzxcvbnm1234567890";
  var link    = "";

  for(var i = 0; i < 16; i++){
    link += charset[Math.floor(Math.random()*charset.length)];
  }

  link += ".onion";

  document.getElementById("link").innerText = link;

}

function copyIntoClipboard(){
  var range = document.createRange();

  range.selectNode(document.getElementById("link"));
  window.getSelection().addRange(range);

  document.execCommand("copy");
}

function openNewTab(){
  var link = "http://" + document.getElementById("link").innerText;

  window.open(link, "_blank").focus();
}

function changeStyle(){
  (bool)?document.getElementById("navbarNav").style.removeProperty("margin-left"):document.getElementById("navbarNav").style.marginLeft = "-100px";
  bool = !bool;
}
