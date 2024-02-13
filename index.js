var drumButtons = document.querySelectorAll(".drum");
var numberOfDrumButtons = drumButtons.length;

function handleClick() {
    var audio = new Audio ("sounds/tom-1.mp3");
    audio.play();
}

for (var i = 0; i < numberOfDrumButtons; i++) {
    drumButtons[i].addEventListener("click", handleClick);
}