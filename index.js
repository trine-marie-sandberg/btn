const robot = document.getElementById("robot");
robot.addEventListener("click", hiRobot);
//const eyeLeft = document.getElementsByClassName("eye-left");
const eyeLeft = document.getElementById("eye-left")
const eyeRight = document.getElementById("eye-right")
eyeLeft.style.backgroundImage = "radial-gradient(grey, black)";
eyeRight.style.backgroundImage = "radial-gradient(grey, black)";

function hiRobot() {
    console.log("click")
    eyeLeft.style.backgroundImage = "radial-gradient(yellow 40%, red)";
    eyeRight.style.backgroundImage = "radial-gradient(yellow 40%, red)";
}