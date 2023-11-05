const input = document.querySelector("#validation-input");
input.addEventListener("blur", function () {
    const expectedLength = input.getAttribute("data-length");
    const inputText = input.value.trim();
    const inputLength = inputText.length;

    if (inputLength == expectedLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
});
