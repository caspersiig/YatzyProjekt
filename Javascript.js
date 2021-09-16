const spilletbody = document.getElementsByClassName("spillet")
//skriver teksten til labelsne i spillet boxen
const stringArray = ["1-s", "2-s", "3-s", "4-s", "5-s", "6-s", "One pair", "Two pairs", "Three same", "Four same", "Full house", "Small straight", "Large straight", "Chance", "Yazty"]

for (let i = 1; i <= 15; i++) {
    //laver og sætter paragraf til teksten yderst til højre
    let element = document.createElement("p");
    element.innerHTML = stringArray[i - 1];
    element.style.margin = "auto"
    spilletbody[0].appendChild(element);
    //laver input fælderne til point tælningen
    element = document.createElement("input");
    element.id = "input" + i;
    element.setAttribute("readonly", "readonly")
    element.style.maxHeight = "50%"
    element.style.margin = "auto"
    element.style.maxWidth = "75%"
    element.addEventListener('click', clickHandler)
    spilletbody[0].appendChild(element);

    if (i == 5) {
        //laver en div med input og paragraph til sum
        const div = document.createElement("div");
        div.style.maxWidth = "100%";
        element = document.createElement("input");
        element.id = "sum";
        element.setAttribute("readonly", "readonly")
        element.style.maxWidth = "40%"
        div.style.margin = "auto"
        div.innerHTML = "<label>Sum: </label>"
        div.append(element)
        spilletbody[0].append(div);
    } else {
        //laver usynlige p for at udfylde grid
        element = document.createElement("p");
        spilletbody[0].appendChild(element);
    }

    if (i == 5) {
        // laver div med label og input 
        const div = document.createElement("div");
        div.style.maxWidth = "100%";
        element = document.createElement("input");
        element.id = "bonus";
        element.setAttribute("readonly", "readonly")
        element.style.maxWidth = "40%"
        element.value = 0;
        div.style.margin = "auto"
        div.innerHTML = "<label>Bonus: </label>"
        div.append(element)
        spilletbody[0].append(div);
    } else if (i == 15) {
        const div = document.createElement("div");
        div.style.maxWidth = "100%";
        element = document.createElement("input");
        element.id = "total";
        element.setAttribute("readonly", "readonly")
        element.style.maxWidth = "45%"
        div.style.margin = "auto"
        div.innerHTML = "<label>Total: </label>"
        div.append(element)
        spilletbody[0].append(div);
    } else {
        //laver usynlige p for at udfylde grid
        element = document.createElement("p");
        spilletbody[0].appendChild(element);
    }

}

//terningerne
const turn = document.getElementById("turn");
const roll = document.getElementById("roll");

const terning = document.getElementsByClassName("terning");
const terningØjne = ["billeder/dice-six-faces-one.svg", "billeder/dice-six-faces-two.svg", "billeder/dice-six-faces-three.svg", "billeder/dice-six-faces-four.svg", "billeder/dice-six-faces-five.svg", "billeder/dice-six-faces-six.svg"];

// opbevarer de kast spilleren har kastet
let toss = [];
//laver de tilfælde til kastene 1-6
let randNum = () => {
    return Math.floor(Math.random() * 5) + 1;
}

// opbevarer værdien på tilfældig nummer
let øjne = null;

function rollDices() {
    for (let i = 0; i < terning.length; i++) {
        if (!bool[i]) {
            øjne = randNum();
            let list = terning[i].firstChild.src = terningØjne[øjne];
            toss[i] = øjne + 1;
        }
    }
}
let turnValue = 0;

function rolled() {
    turnValue++;
    if (turnValue == 1) {
        start();
        rollDices();
        turn.innerHTML = "Turn " + turnValue;
        udregnPoint(toss)
    } else if (turnValue == 2) {
        rollDices();
        turn.innerHTML = "Turn " + turnValue;
        udregnPoint(toss)
    } else if (turnValue == 3) {
        rollDices();
        turn.innerHTML = "Turn " + turnValue;
        udregnPoint(toss)
    } else {
        turnValue = 3;
        console.log("ingen ture tilbage");
    }
}

let bool = [false, false, false, false, false];
function terningAction(e) {
    if (turnValue)
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
                console.log("Vi savner dumle!;)");
                break;
        }
    if (e.target.id == 1 && bool[0] || e.target.id == 2 && bool[1] || e.target.id == 3 && bool[2] || e.target.id == 4 && bool[3] || e.target.id == 5 && bool[4]) {
        e.target.style.opacity = "0.2";
    } else {
        e.target.style.opacity = "1";
    }
}

roll.addEventListener("click", rolled);

function start() {
    if (turnValue == 1) {
        for (let i = 0; i < terning.length; i++) {
            terning[i].addEventListener("click", terningAction);
        }
    }
}

//spil point udregning
//låser de point man har valgt -1 = false
let valgtePoint = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//håndtere når der bliver trukket på et input
function clickHandler(params) {
    let hit = document.getElementById(params.target.id)
    // se om den er brugt
    if (valgtePoint[hit.id.substring(5) - 1] == -1 && turnValue >= 1) {
        valgtePoint[hit.id.substring(5) - 1] = Number.parseInt(hit.value);
        hit.style.opacity = "0.2";

        // SUM udregning
        let result = 0;
        for (let i = 0; i <= 5; i++) {
            if (valgtePoint[i] != -1)
                result += valgtePoint[i]
        }
        console.log(result)
        document.getElementById("sum").value = result

        //BONUS udregning
        if (result > 63) {
            document.getElementById("bonus").value = 50;
        }

        //total udregning
        result = 0;
        for (let i = 0; i <= 14; i++) {
            if (valgtePoint[i] != -1)
                result += valgtePoint[i]
        }
        result += Number.parseInt(document.getElementById("bonus").value);
        document.getElementById("total").value = result;

        //start forfra funktion
        restart();
        let done = true;
        for (let i = 0; i < valgtePoint.length; i++) {
            if (valgtePoint[i] == -1) {
                done = false;
            }
        }
        if (done) {
            window.confirm("Scored: " + result)
            valgtePoint = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
            for (let i = 0; i <= 14; i++) {
                document.getElementById("input" + (i + 1)).style.opacity = "1";

            }
        }
    }
}

function restart() {
    turnValue = 0;
    document.getElementById("turn").innerHTML = "Klar til næste kast!";
    for (let i = 0; i < bool.length; i++) {
        bool[i] = false;
    }
    for (let i = 0; i < toss.length; i++) {
        toss[i] = 0;
        terning[i].firstChild.src = terningØjne[0];
        terning[i].firstChild.style.opacity = "1";
    }
    udregnPoint(toss)

}
//udregner point til kastet
function udregnPoint(terningeSlag) {
    //første 6 er 
    for (let i = 1; i <= 6; i++) {
        if (valgtePoint[i - 1] == -1) {
            let element = document.getElementById("input" + i)
            let result = 0;
            for (let j = 0; j < terningeSlag.length; j++) {
                if (terningeSlag[j] == i) {
                    result += i;
                }
            }
            element.value = result;
        }

    }

    // sikkert en bedre løsning
    if (valgtePoint[7 - 1] == -1)
        document.getElementById("input7").value = findPair(terningeSlag)
    if (valgtePoint[8 - 1] == -1)
        document.getElementById("input8").value = findTwoPairs(terningeSlag)
    if (valgtePoint[9 - 1] == -1)
        document.getElementById("input9").value = findThreeSame(terningeSlag)
    if (valgtePoint[10 - 1] == -1)
        document.getElementById("input10").value = findFourSame(terningeSlag)
    if (valgtePoint[11 - 1] == -1)
        document.getElementById("input11").value = findFullhouse(terningeSlag)
    if (valgtePoint[12 - 1] == -1)
        document.getElementById("input12").value = findsmallStraigt(terningeSlag)
    if (valgtePoint[13 - 1] == -1)
        document.getElementById("input13").value = findLargeStraight(terningeSlag)
    if (valgtePoint[14 - 1] == -1)
        document.getElementById("input14").value = findChance(terningeSlag)
    if (valgtePoint[15 - 1] == -1)
        document.getElementById("input15").value = Yatzy(terningeSlag)

}
//udregninger til de forskellige point ting
function findPair(terningeSlag) {
    let array = [0, 0, 0, 0, 0, 0, 0]
    let result = 0;
    for (let i = 0; i < terningeSlag.length; i++) {
        array[terningeSlag[i]] += 1;
        if (array[terningeSlag[i]] >= 2 && result < terningeSlag[i] * 2) {
            result = terningeSlag[i] * 2;
        }
    }
    return result;
}

function findTwoPairs(terningeSlag) {
    let array = [0, 0, 0, 0, 0, 0, 0]
    let result = 0;
    let pair = 0;
    for (let i = 0; i < terningeSlag.length; i++) {
        array[terningeSlag[i]] += 1;
        if (array[terningeSlag[i]] == 2) {
            result += terningeSlag[i] * 2;
            pair += 1;
        }
    }
    if (pair == 2) {
        return result;
    }
    return 0;
}

function findThreeSame(terningeSlag) {
    let array = [0, 0, 0, 0, 0, 0, 0]
    let result = 0;
    for (let i = 0; i < terningeSlag.length; i++) {
        array[terningeSlag[i]] += 1;
        if (array[terningeSlag[i]] >= 3 && result < terningeSlag[i] * 3) {
            result = terningeSlag[i] * 3;
        }
    }
    return result;
}

function findFourSame(terningeSlag) {
    let array = [0, 0, 0, 0, 0, 0, 0]
    let result = 0;
    for (let i = 0; i < terningeSlag.length; i++) {
        array[terningeSlag[i]] += 1;
        if (array[terningeSlag[i]] >= 4 && result < terningeSlag[i] * 4) {
            result = terningeSlag[i] * 4;
        }
    }
    return result;
}

function findFullhouse(terningeSlag) {
    let array = [0, 0, 0, 0, 0, 0, 0]
    let par = false;
    let threesame = false;
    let result = 0;
    for (let i = 0; i < terningeSlag.length; i++) {
        array[terningeSlag[i]] += 1;
    }
    for (let j = 1; j < array.length; j++) {
        if (array[j] == 2) {
            result += 2 * j;
            par = true;
        } else
        if (array[j] == 3) {
            result += 3 * j;
            threesame = true;
        }
    }
    if (par && threesame) return result
    return 0;
}

function findsmallStraigt(terningeSlag) {
    let array = [0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < terningeSlag.length; i++) {
        array[terningeSlag[i]] += 1;
    }
    for (let j = 1; j < array.length - 1; j++) {
        if (array[j] == 0) {
            return 0;
        }
    }
    return 15;
}

function findLargeStraight(terningeSlag) {
    let array = [0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < terningeSlag.length; i++) {
        array[terningeSlag[i]] += 1;
    }
    for (let j = 2; j < array.length; j++) {
        if (array[j] == 0) {
            return 0;
        }
    }
    return 20;
}

function findChance(terningeSlag) {
    let result = 0;
    for (let i = 0; i < terningeSlag.length; i++) {
        result += terningeSlag[i]
    }
    return result;
}

function Yatzy(terningeSlag) {
    let array = [0, 0, 0, 0, 0, 0, 0]
    let result = 0;
    for (let i = 0; i < terningeSlag.length; i++) {
        array[terningeSlag[i]] += 1;
        if (array[terningeSlag[i]] >= 5 && result < terningeSlag[i] * 5) {
            result = terningeSlag[i] * 5;
        }
    }
    if (result) return 50;
    return 0;
}