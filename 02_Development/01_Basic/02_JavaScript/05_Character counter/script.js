const text = document.querySelector("textarea");


text.addEventListener("input", () => {
    var userText = text.value;
    const p = document.getElementById("count");
    p.innerHTML = userText.length;
    //console.log(p);
    if (userText.length > 300) {
        alert("Limit reached");
    }
})