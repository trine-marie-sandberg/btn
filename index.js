
const robot = document.getElementById("robot");
robot.addEventListener("click", hiRobot);

function hiRobot() {
    let isTurnedOn;
    const eyeLeft = document.getElementById("eye-left")
    const eyeRight = document.getElementById("eye-right")

    const screen = document.getElementById("screen");
    screen.style.backgroundImage = "radial-gradient(grey, black)"
    const message = document.getElementById("message");
    message.innerText = "";
    if( message.innerText === "") {
        console.log("off")
        eyeLeft.style.backgroundImage = "radial-gradient(grey, black)";
        console.log(eyeLeft)
        eyeRight.style.backgroundImage = "radial-gradient(grey, black)";
        screen.style.backgroundImage = "radial-gradient(grey, black)";
        message.innerText = "";
    }
    if(message.innerText === "") {
        console.log("on")
        eyeLeft.style.backgroundImage = "radial-gradient(yellow 40%, red)";
        eyeRight.style.backgroundImage = "radial-gradient(yellow 40%, red)";
        screen.style.backgroundImage = "radial-gradient(green, black)";
        message.innerText = "hello there! My name is MR robot ..";
    }
}