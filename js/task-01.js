const ulElem = document.querySelector("#categories");
console.log(`Number of categories: ${ulElem.children.length}`);

[...ulElem.children].forEach((element) => {
    console.log(`Category:${element.firstElementChild.textContent}`);
    console.log(`Elements:${element.lastElementChild.children.length}`);
});
