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



// Index
let topIndex = 0;
let bottomIndex = 0;
let dressIndex = 0;

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

// Function audio 
function playAudio() {
    audio.play();
} 
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play 



// AddEventListener
topButton.addEventListener("click", changeTop);
bottomButton.addEventListener("click", changeBottom);
dressButton.addEventListener("click", changeDress);
doneButton.addEventListener("click", playAudio);

