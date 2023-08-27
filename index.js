//ROBOT
const robot = document.getElementById("robot");
let isOn = false;
robot.addEventListener("click", () => {
    if (isOn === true) {robotOff()}
    else {robotOn()}
});

const eyeLeft = document.getElementById("eye-left")
const eyeRight = document.getElementById("eye-right")
const screen = document.getElementById("screen");
screen.style.backgroundImage = "radial-gradient(grey, black)"
const message = document.getElementById("message");
message.innerText = "";
const weelOuter = document.getElementById("weel-outer");
const handLeft = document.querySelector(".hand-left");
const handRight = document.querySelector(".hand-right");

function robotOff() {
    eyeLeft.style.backgroundImage = "radial-gradient(grey, black)";
    eyeRight.style.backgroundImage = "radial-gradient(grey, black)";
    screen.style.backgroundImage = "radial-gradient(grey, black)";
    weelOuter.classList.remove("weel-rotate");
    message.innerText = "";
    isOn = false;
}
function robotOn() {
    eyeLeft.style.backgroundImage = "radial-gradient(yellow 40%, red)";
    eyeRight.style.backgroundImage = "radial-gradient(yellow 40%, red)";
    screen.style.backgroundImage = "radial-gradient(green, black)";
    weelOuter.classList.add("weel-rotate");
    weelOuter.style.transition = "all 10s ease-in-out";
    handRight.style.transform = "rotateY(360deg)";
    handLeft.style.transform = "rotateY(360deg)";
    message.innerText = "hello there! My name is MR robot. I would like to be of help, but I'm really just a button ..";
    isOn = true;
}

//FISHBOWL
const fish = document.getElementById("fish");
const fishBowl = document.getElementById("fish-bowl");
let isMoving = false;
fishBowl.addEventListener("click", () => {
    if (isMoving === false) {addMotion()}
    else {stopMotion()}
})
function stopMotion() {
    fish.classList.remove("round-motion");
    isMoving = false;
}
function addMotion() {
    fish.classList.add("round-motion");
    isMoving = true;
}