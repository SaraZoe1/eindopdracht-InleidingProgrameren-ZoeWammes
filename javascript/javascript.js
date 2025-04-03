// tops
const topImage = document.getElementById("topImage");
const topButton = document.getElementById("topButton")
const tops = ["#", "top1","top2","top3"]

// bottoms
const bottomImage = document.getElementById("bottomImage");
const bottomButton = document.getElementById("bottomButton");
const bottoms = ["#","bottom1","bottom2","bottom3"];

// dresses
const dressImage = document.getElementById("dressImage");
const dressButton = document.getElementById("dressButton");
const dress = ["#", "dress1","dress2"];

// audio
const audio = document.getElementById("sound");
const doneButton = document.getElementById("doneButton");

//  Timer
const timer = document.getElementById("timer");
const timeButton = document.getElementById('timeButton')
const timerSound = document.getElementById('timerSound')


// Index (variabele)
let topIndex = 0;
let bottomIndex = 0;
let dressIndex = 0;
let timeLeft = 30; // Aantal seconden waar de timer begint
let timerId; // Variabele om de interval-ID op te slaan, zodat we het later kunnen stoppen



// Function tops
function changeTop() {
    topIndex++;
    if (topIndex >= tops.length) {
        topIndex = 0;
    }

    topImage.src = "img/" + tops[topIndex] + ".png";
}

// Function bottoms
function changeBottom() {
    bottomIndex++;
    if (bottomIndex >= bottoms.length) {
        bottomIndex = 0;
    }

    bottomImage.src = "img/" + bottoms[bottomIndex] + ".png";
}

// Function dresses
function changeDress() {
    dressIndex++;
    if (dressIndex >= dress.length) {
        dressIndex = 0;
    }

    dressImage.src = "img/" + dress[dressIndex] + ".png";
}

// Function audio (https://chatgpt.com/c/67e42403-9038-8013-aa5e-9460f710b26e)(Prompt:hoe zet ik mijn audio op pauze?) 
// Audio credits: https://www.youtube.com/watch?v=fpneQ8ec7tg&ab_channel=L0ki_Lux
function playAudio() {
    if (audio.paused) {
        audio.play();
        doneButton.textContent = "Music Pause"; 
    } else {
        audio.pause();
        doneButton.textContent = "Music Play"; 
    }
}

function startTimer() {
    timeButton.disabled = true; 
    timerId = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerSound.play() 
            timer.textContent = "It's Timeee!";
            timeButton.disabled = false; 
        }
    }, 1000);
}










// AddEventListener
topButton.addEventListener("click", changeTop);
bottomButton.addEventListener("click", changeBottom);
dressButton.addEventListener("click", changeDress);
doneButton.addEventListener("click", playAudio);
timeButton.addEventListener("click", startTimer);

