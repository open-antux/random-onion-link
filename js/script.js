function generateLink(){
  var charset = "qwertyuiopasdfghjklzxcvbnm1234567890";
  var link    = "";

  for(var i = 0; i < 16; i++){
    link += charset[Math.floor(Math.random()*charset.length)];
  }

  link += ".onion";

  document.getElementById('link').innerText = link;

}
