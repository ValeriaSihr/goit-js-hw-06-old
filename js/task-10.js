function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const reference = {
    controls: document.querySelector("#controls input"),
    create: document.querySelector("button[data-create]"),
    destroy: document.querySelector("button[data-destroy]"),
    boxes: document.querySelector("#boxes"),
};
console.log(reference);

function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
        const elem = document.createElement("div");

        elem.style.width = 30 + 10 * i + "px";
        elem.style.height = 30 + "px";
        elem.style.backgroundColor = getRandomHexColor();

        reference.boxes.append(elem);
    }
}
reference.create.addEventListener("click", function () {
    const amount = reference.controls.value;
    if (amount > 0) {
        createBoxes(amount);
    }
});

reference.destroy.addEventListener("click", function () {
    reference.boxes.innerHTML = "";
});
