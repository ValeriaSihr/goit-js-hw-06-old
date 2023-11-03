const counter = document.querySelector("#counter");
const span = document.querySelector("#value");
const btnDecr = document.querySelector('[data-action = "decrement"]');
const btnIncr = document.querySelector('[data-action = "increment"]');
console.log(counter);
console.log(span);
console.log(btnDecr);
console.log(btnIncr);
let counterValue = 0;

btnDecr.addEventListener("click", () => {
    counterValue += 1;
    span.textContent = counterValue;
});
btnIncr.addEventListener("click", () => {
    counterValue -= 1;
    span.textContent = counterValue;
});
