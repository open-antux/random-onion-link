function init(){
  // TODO: Seed the random function
}

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
  var link = document.getElementById("link");

  window.open(link, "_blank").focus();
}
