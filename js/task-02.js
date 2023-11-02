const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const newElem = ingredients.map((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    console.dir(li);
    return li;
});
const list = document.querySelector("#ingredients");
list.append(...newElem);
