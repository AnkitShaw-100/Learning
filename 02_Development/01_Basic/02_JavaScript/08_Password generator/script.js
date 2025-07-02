const input = document.getElementById("inp");
const button = document.getElementById("generate");
var inputText = input.value;

button.addEventListener("click", () => {
    passwordGenerator();
})

function passwordGenerator() {
    const str = "0123456789ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
    var inputText = input.value;
    let len = parseInt(inputText);
    let password = "";
    if (isNaN(len) || len < 1) {
        alert("Please enter a valid password length.");
        return;
    }
    if (len > 16) {
        alert("Limit reached. 16 is the limit.");
        return;
    }
    for(var i = 0; i < len; i++){
        var generetedText = Math.floor(Math.random() * str.length);
        password = password + str[generetedText];
    }
    if (button) {
        button.textContent = password;
    }
}

