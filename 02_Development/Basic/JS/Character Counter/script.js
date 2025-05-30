const text = document.querySelector("textarea");


text.addEventListener("input", () => {
    var userText = text.value;
    if(userText.length > 300){
        alert("Limit reached");
    }
})