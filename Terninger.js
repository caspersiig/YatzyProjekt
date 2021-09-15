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

function rollDices() {
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

let bool = [false, false, false, false, false];
function terningAction(e) {
        switch (e.target.id) {
            case "1":
                if (!bool[0]) {
                    bool[0] = true; 
                } else {
                    bool[0] = false;
                }
                break;
            case "2":
                if (!bool[1]) {
                    bool[1] = true; 
                } else {
                    bool[1] = false;
                }
                break;
            case "3":
                if (!bool[2]) {
                    bool[2] = true; 
                } else {
                    bool[2] = false;
                }
                break;
            case "4":
                if (!bool[3]) {
                    bool[3] = true; 
                } else {
                    bool[3] = false;
                }
                break;
            case "5":
                if (!bool[4]) {
                    bool[4] = true; 
                } else {
                    bool[4] = false;
                }
                break;
            default:
                console.log("t")
                break;
        }
    if (e.target.id == 1 && bool[0]) {
        console.log("heyy")
        e.target.style.opacity = "0.2";
        console.log("You clicked on: " + e.target.id);
    } else {
        console.log("yoo")
        e.target.style.opacity = "1";
    }
    if (e.target.id == 2 && bool[1]) {
        e.target.style.opacity = "0.2";
        console.log("You clicked on: " + e.target.id);
    } else {
        e.target.style.opacity = "1";
    }
    if (e.target.id == 3 && bool[2]) {
        e.target.style.opacity = "0.2";
        console.log("You clicked on: " + e.target.id);
    } else {
        e.target.style.opacity = "1";
    }
    if (e.target.id == 4 && bool[3]) {
        e.target.style.opacity = "0.2";
        console.log("You clicked on: " + e.target.id);
    } else {
        e.target.style.opacity = "1";
    }
    if (e.target.id == 5 && bool[4]) {
        e.target.style.opacity = "0.2";
        console.log("You clicked on: " + e.target.id);
    } else {
        e.target.style.opacity = "1";
    }
    console.log(bool)
}

roll.addEventListener("click", rolled);
for (let i = 0; i < terning.length; i++) {
    terning[i].addEventListener("click", terningAction);
    // document.getElementById("1").addEventListener("click", terningAction);
}
console.log(terning)