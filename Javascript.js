const spilletbody = document.getElementsByClassName("spillet")
spilletbody[0].displa

for (let i = 1; i <= 15; i++) {

    let element = document.createElement("p");
    element.innerHTML = "iiiii";

    element.id = i;
    spilletbody[0].appendChild(element);

    element = document.createElement("input");
    element.id = i;
    element.style.marginRight = "5%"
    spilletbody[0].appendChild(element);

    element = document.createElement("p");
    element.innerHTML = "inge";
    element.id = i;
    element.style.marginRight = "2%"
    spilletbody[0].appendChild(element);

    element = document.createElement("p");
    element.id = i;
    element.style.marginRight = "2%"
    element.innerHTML = "ing4";
    spilletbody[0].appendChild(element);

}


let y = 0;
for (let i = 1; i <= 60; i++) {
    if (i % 3 == 0) {
        y++
        console.log("y" + i)
    }

}
console.log(y)