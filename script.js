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
    for (i = 0;i<number;i++) {
        const childAdd = document.createElement("div");
        childAdd.classList.add("childAdd");
        for (j=0;j<number;j++) {
            const subChildAdd = document.createElement("div");
            subChildAdd.classList.add("subChildAdd");
            childAdd.appendChild(subChildAdd);
        }
        container.appendChild(childAdd);
    }
}

restart.addEventListener("click",numberCase);


