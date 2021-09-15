const spilletbody = document.getElementsByClassName("spillet")
const stringArray = ["1-s", "2-s", "3-s", "4-s", "5-s", "6-s", "One pair", "Two pairs", "Three same", "Four same", "Full house", "Small straight", "Large straight", "Chance", "Yazty"]

for (let i = 1; i <= 15; i++) {
    let element = document.createElement("p");
    element.innerHTML = stringArray[i - 1];
    element.style.margin = "auto"
    spilletbody[0].appendChild(element);

    element = document.createElement("input");
    element.id = "input" + i;
    element.setAttribute("readonly", "readonly")
    element.style.maxHeight = "50%"
    element.style.margin = "auto"
    element.style.maxWidth = "75%"
    element.addEventListener('click', clickHandler)
    spilletbody[0].appendChild(element);

    if (i == 5) {
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
        element = document.createElement("p");
        element.innerHTML = "";
        spilletbody[0].appendChild(element);
    }

    if (i == 5) {
        const div = document.createElement("div");
        div.style.maxWidth = "100%";
        element = document.createElement("input");
        element.id = "bonus";
        element.setAttribute("readonly", "readonly")
        element.style.maxWidth = "40%"
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
        element = document.createElement("p");
        spilletbody[0].appendChild(element);
    }

}

//terningerne
let terningeKast = [Math.floor(Math.random() * 5)+1, Math.floor(Math.random() * 5)+1, Math.floor(Math.random() * 5)+1, Math.floor(Math.random() * 5)+1, Math.floor(Math.random() * 5)+1]
//spil point udregning
//låser de point man har valgt 0 = false
let valgtePoint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//håndtere når der bliver trukket på et input
function clickHandler(params) {
    let hit = document.getElementById(params.target.id)
    console.log(hit.value)
    //22 95 55 88
    // se om den er brugt
    if (valgtePoint[hit.id.substring(5) - 1] == 0) {
        valgtePoint[hit.id.substring(5)- 1] = Number.parseInt(hit.value);
        hit.style.opacity = "0.2";

        // SUM udregning
        let result = 0;
        for (let i = 0; i <= 5; i++) {
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
            result += valgtePoint[i]
        }
        document.getElementById("total").value = result;
        terningeKast = [Math.floor(Math.random() * 5)+1, Math.floor(Math.random() * 5)+1, Math.floor(Math.random() * 5)+1, Math.floor(Math.random() * 5)+1, Math.floor(Math.random() * 5)+1]
        console.log(terningeKast)
        udregnPoint(terningeKast)
    }

}
//udregner point til kastet
udregnPoint(terningeKast)

function udregnPoint(terningeSlag) {
    //første 6 er 
    for (let i = 1; i <= 6; i++) {
        if (!valgtePoint[i - 1]) {
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
    if (!valgtePoint[7 - 1])
        document.getElementById("input7").value = findPair(terningeSlag)
    if (!valgtePoint[8 - 1])
        document.getElementById("input8").value = findTwoPairs(terningeSlag)
    if (!valgtePoint[9 - 1])
        document.getElementById("input9").value = findThreeSame(terningeSlag)
    if (!valgtePoint[10 - 1])
        document.getElementById("input10").value = findFourSame(terningeSlag)
    if (!valgtePoint[11 - 1])
        document.getElementById("input11").value = findFullhouse(terningeSlag)
    if (!valgtePoint[12 - 1])
        document.getElementById("input12").value = findsmallStraigt(terningeSlag)
    if (!valgtePoint[13 - 1])
        document.getElementById("input13").value = findLargeStraight(terningeSlag)
    if (!valgtePoint[14 - 1])
        document.getElementById("input14").value = findChance(terningeSlag)
    if (!valgtePoint[15 - 1])
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