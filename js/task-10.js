function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
console.log(controls);
const boxes = document.querySelector("#boxes");
console.log(boxes);
function createBoxes(amount) {}
