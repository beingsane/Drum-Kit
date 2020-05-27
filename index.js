var drumList = document.querySelectorAll(".drum");
for (var  i = 0; i < drumList.length; i++){
  drumList[i].addEventListener("click", function(event){
    addSound(this.textContent);
    addAnimation(this.textContent);
  });
  drumList[i].addEventListener("keydown", function(event){
    addSound(event.key);
    addAnimation(event.key);
  });
}
function addSound (drumName) {
  switch (drumName){
    case "w":
      var soundName = "tom-4";
      break;
    case "a":
      var soundName = "tom-3";
      break;
    case "s":
      var soundName = "tom-2";
      break;
    case "d":
      var soundName = "tom-1";
      break;
    case "j":
      var soundName = "snare";
      break;
    case "k":
      var soundName = "kick-bass";
      break;
    case "l":
      var soundName = "crash";
      break;
    default:
      var soundName = undefined;
      console.log(drumName);
  }
  var sound = new Audio("sounds/"+soundName+".mp3")
  sound.play();
}
function addAnimation(keyName){
  var button = document.querySelector("."+ keyName);
  button.classList.add("pressed");
  setTimeout(function(){
      button.classList.remove("pressed");
  }, 200);
}
