const button = document.getElementById("Colour");

function colorGenerator() {
    const hexChar = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
        const randomColor = Math.floor(Math.random() * 16);
        color = color + hexChar[randomColor];
    }
    return color;
}

button.addEventListener("click", () => {
    const color = colorGenerator();
    document.body.style.backgroundColor = color;
    button.textContent = color;
    if (colorCodeElement) {
        colorCodeElement.textContent = color;
    }
});
