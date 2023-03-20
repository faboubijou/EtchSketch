const restart = document.querySelector("#initial");
//const container = document.querySelector(".container");

function numberCase() {
    let number = prompt("Give the number of cases for a side (above 0 and under 100)",16);
    while (number > 100 || number<1) {
        number = prompt("You really need to give a number < 100 and > 0. Try again");
    }
    clearContainer;
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
    let number2 = number*number;
    for (i=0;i<number2;i++) {
        const childAdd = document.createElement('div');
        childAdd.classList.add("childAdd");
        container.appendChild(childAdd);
    }
}

restart.addEventListener("click",numberCase);
