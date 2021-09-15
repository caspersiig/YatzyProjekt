const spilletbody = document.getElementsByClassName("spillet")
const stringArray = ["1-s","2-s","3-s","4-s","5-s","6-s","One pair","Two pairs","Three same","Four same","Full house","Small straight","Large straight","Chance","Yazty"]

for (let i = 1; i <= 15; i++) {

    let element = document.createElement("p");
    element.innerHTML = stringArray[i-1];
    element.id = i;
    element.style.margin = "auto"
    spilletbody[0].appendChild(element);

    element = document.createElement("input");
    element.id = i;
    element.setAttribute("readonly","readonly")
    element.style.marginRight = "5%"
    element.style.maxHeight = "50%"
    element.style.margin = "auto"
    element.style.maxWidth = "75%"
    spilletbody[0].appendChild(element);

    if(i == 5){
        const div = document.createElement("div");
        element = document.createElement("input");
        element.id = "sum";
        element.setAttribute("readonly","readonly")
        element.style.marginRight = "5%"
        element.style.maxWidth = "45%"

        div.style.margin = "auto"
        div.innerHTML = "<label>Sum: </label>"
        div.append(element)
        spilletbody[0].append(div);
    }else{
        element = document.createElement("p");
        element.innerHTML = "";
        element.id = i;
        spilletbody[0].appendChild(element);
    }


if(i == 5){
    const div = document.createElement("div");
    element = document.createElement("input");
    element.id = "bonus";
    element.setAttribute("readonly","readonly")
    element.style.marginRight = "5%"
    element.style.maxWidth = "45%"

    div.style.margin = "auto"
    div.innerHTML = "<label>Bonus: </label>"
    div.append(element)
    spilletbody[0].append(div);
}else if(i == 15){
    const div = document.createElement("div");
    element = document.createElement("input");
    element.id = "total";
    element.setAttribute("readonly","readonly")
    element.style.marginRight = "5%"
    element.style.maxWidth = "45%"

    div.style.margin = "auto"
    div.innerHTML = "<label>Total: </label>"
    div.append(element)
    spilletbody[0].append(div);
}else{
    element = document.createElement("p");
    element.id = i;
    spilletbody[0].appendChild(element);
}

}


let y = 0;
for (let i = 1; i <= 60; i++) {
    if (i % 3 == 0) {
        y++
        console.log("y" + i)
    }

}
console.log(y)