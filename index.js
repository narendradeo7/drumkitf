var noOfdbtn=document.querySelectorAll(".drum").length;

for(var i=0;i<noOfdbtn;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

  function handleclick(){
    // alert("i got clicked");
makesound(this.innerHTML);
buttonAnimation(this.innerHTML);


  }

}
document.addEventListener("keypress",keyboard);
function keyboard(keyn){
  makesound(keyn.key);
  buttonAnimation(keyn.key);
}


// for playing sounds
function makesound(key){
  switch(key){
    case "w":
    var ad=new Audio("sounds/tom-1.mp3");
    ad.play();
    break;

    case "a":
    var ad=new Audio("sounds/tom-2.mp3");
    ad.play();
    break;

    case "s":
    var ad=new Audio("sounds/tom-3.mp3");
    ad.play();
    break;

    case "d":
    var ad=new Audio("sounds/tom-4.mp3");
    ad.play();
    break;

    case "j":
    var ad=new Audio("sounds/crash.mp3");
    ad.play();
    break;

    case "k":
    var ad=new Audio("sounds/kick-bass.mp3");
    ad.play();
    break;

    case "l":
    var ad=new Audio("sounds/snare.mp3");
    ad.play();
    break;
  }
}

function buttonAnimation(currentKey){
  var activebutton=document.querySelector("."+currentKey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}
