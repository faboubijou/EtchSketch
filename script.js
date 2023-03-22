const restart = document.querySelector("#initial");

function numberCase() {
    let number = prompt("Give the number of cases for a side (above 0 and under 100)",16);
    while (number > 100 || number<1) {
        number = prompt("You really need to give a number < 100 and > 0. Try again");
    }
    clearContainer();
    addCases(number);
}

function clearContainer() {
    const childAdds = document.querySelectorAll(".childAdd");
    childAdds.forEach((childAdd) => {
        childAdd.remove();
    });
}

function addCases(number) {
    const container = document.querySelector(".container");
    for (i=0;i<number;i++) {
        const childAdd = document.createElement("div");
        childAdd.classList.add("childAdd");
        for (j=0;j<number;j++) {
            const subChildAdd = document.createElement("div");
            subChildAdd.classList.add("subChildAdd");
            childAdd.appendChild(subChildAdd);
        }
        container.appendChild(childAdd);
    }
    const subChildAdds = document.querySelectorAll(".subChildAdd");
    subChildAdds.forEach(subChildAdd => subChildAdd.addEventListener('mouseenter',function(e) {
        if (getComputedStyle(subChildAdd)["backgroundColor"] === "rgba(0, 0, 0, 0)") {
            let r = Math.floor(255*Math.random());
            let g = Math.floor(255*Math.random());
            let b = Math.floor(255*Math.random());
            subChildAdd.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } else {
            let presentColor = getComputedStyle(subChildAdd)["backgroundColor"];
            presentColor = presentColor.slice(4,presentColor.length-1);
            let valeurs = presentColor.split(", ");
            let r = Math.max(0,valeurs[0]-25);
            let g = Math.max(0,valeurs[1]-25);
            let b = Math.max(0,valeurs[2]-25);
            subChildAdd.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }));
}

restart.addEventListener("click",numberCase);