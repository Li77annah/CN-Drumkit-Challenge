const audioBoom = document.getElementById("audioBoom");
const audioClap = document.getElementById("audioClap");
const audioHihat = document.getElementById("audioHihat");
const audioKick = document.getElementById("audioKick");
const audioOpenhat = document.getElementById("audioOpenhat");
const audioRide = document.getElementById("audioRide");
const audioSnare = document.getElementById("audioSnare");
const audioTink = document.getElementById("audioTink");
const audioTom = document.getElementById("audioTom");


document.addEventListener("keypress", (event) => {
    if (event.key == "a") {
        audioBoom.src = "sounds/boom.wav";
    } else if (event.key == "s") {
        audioClap.src = "sounds/clap.wav";
    } else if (event.key == "d") {
        audioHihat.src = "sounds/hihat.wav";
    } else if (event.key == "f") {
        audioKick.src = "sounds/kick.wav";
    } else if (event.key == "g") {
        audioOpenhat.src = "sounds/openhat.wav";
    } else if (event.key == "h") {
        audioRide.src = "sounds/ride.wav";
    } else if (event.key == "j") {
        audioSnare.src = "sounds/snare.wav";
    } else if (event.key == "k") {
        audioTink.src = "sounds/tink.wav";
    } else if (event.key == "l") {
        audioTom.src = "sounds/tom.wav";
    }
    });

buttonA.addEventListener("click" , () => {
    audioBoom.src = "sounds/boom.wav";
});

buttonS.addEventListener("click" , () => {
    audioClap.src = "sounds/clap.wav";
});

buttonD.addEventListener("click" , () => {
    audioHihat.src = "sounds/hihat.wav";
});

buttonF.addEventListener("click" , () => {
    audioKick.src = "sounds/kick.wav";
});

buttonG.addEventListener("click" , () => {
    audioOpenhat.src = "sounds/openhat.wav";
});

buttonH.addEventListener("click" , () => {
    audioRide.src = "sounds/ride.wav";
});

buttonJ.addEventListener("click" , () => {
    audioSnare.src = "sounds/snare.wav";
});

buttonK.addEventListener("click" , () => {
    audioTink.src = "sounds/tink.wav";
});

buttonL.addEventListener("click" , () => {
    audioTom.src = "sounds/tom.wav";
});







