const turn = document.getElementById("turn");
const roll = document.getElementById("roll");

let terning = document.getElementsByClassName("terning");

let randNum = () => {
    return Math.floor(Math.random() * 5) + 1;
}

let randImg = () => {

}

window.onload = () => {
    terning[0].firstChild.src = "billeder/dice-six-faces-five.svg";
    console.log(terning[1].src);
}

let turnValue = 2;
let rolled = () => {
    if (turnValue <= 3) {
        randImg();
        turn.innerHTML = "Turn " + turnValue++;
    } else {
        console.log("ingen ture tilbage");
    }
}

roll.addEventListener("click", rolled);

