const turn = document.getElementById("turn");
const roll = document.getElementById("roll");

const terning = document.getElementsByClassName("terning");
const terningØjne = ["billeder/dice-six-faces-one.svg", "billeder/dice-six-faces-two.svg", "billeder/dice-six-faces-three.svg", "billeder/dice-six-faces-four.svg", "billeder/dice-six-faces-five.svg", "billeder/dice-six-faces-six.svg"];

// opbevarer de kast spilleren har kastet
let kast = [];

let randNum = () => {
    return Math.floor(Math.random() * 5) + 1;
}

// opbevarer værdien på den givende billede 
let øjne = null;

function rollDices(paams) {
    for (let i = 0; i < terning.length; i++) {
        øjne = randNum();
        let list = terning[i].firstChild.src = terningØjne[øjne];
        kast[i] = øjne + 1;
    }
}

let turnValue = 0;

function rolled() {
    turnValue++;
    if (turnValue == 1) {
        rollDices();
        turn.innerHTML = "Turn " + turnValue;
    } else if (turnValue == 2) {
        rollDices();
        turn.innerHTML = "Turn " + turnValue;
    } else if (turnValue == 3) {
        rollDices();
        turn.innerHTML = "Turn " + turnValue;
    } else {
        console.log("ingen ture tilbage");
    }
}
let hasClicked = false;
let bool = [false, false, false, false, false];
function terningAction(e) {
    if (!hasClicked) {
    switch (e.target.id) {
        case "1":
            bool[0] = true;
            hasClicked = true;
            break;
        case "2":
            bool[1] = true;
            break;
        case "3":
            bool[2] = true;
            break;
        case "4":
            bool[3] = true;
            break;
        case "5":
            bool[4] = true;
            break;
        default:
            console.log("t")
            break;
    }
}
    if (e.target.id == 1 && bool[0]) {
        e.target.style.opacity = "0";
        console.log("You clicked on: " + e.target.id);
    } else if (hasClicked) {
        e.target.style.opacity = "0";
    } 
    if (e.target.id == 2 && bool[1]) {
        e.target.style.opacity = "0.2";
        console.log("You clicked on: " + e.target.id);
    }
    if (e.target.id == 3 && bool[2]) {
        e.target.style.opacity = "0.2";
        console.log("You clicked on: " + e.target.id);
    }
    if (e.target.id == 4 && bool[3]) {
        e.target.style.opacity = "0.2";
        console.log("You clicked on: " + e.target.id);
    }
    if (e.target.id == 5 && bool[4]) {
        e.target.style.opacity = "0.2";
        console.log("You clicked on: " + e.target.id);
    }
    console.log(bool)
}

function terningOff() {}

roll.addEventListener("click", rolled);
for (let i = 0; i < terning.length; i++) {
    terning[i].addEventListener("click", terningAction);
    terning[i].addEventListener("click", terningOff);
}