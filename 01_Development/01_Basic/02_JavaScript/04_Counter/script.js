const count = document.querySelector("h1");
console.log(count)
console.log(count.textContent);

const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
    count.textContent = parseInt(count.textContent) + 1;
    console.log(count.textContent);
})

const button2 = document.getElementById("button2");
button2.addEventListener("click", () => {
    count.textContent = parseInt(count.textContent) - 1;
})