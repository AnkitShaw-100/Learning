const UsernameInput = document.getElementById('Username-input');

UsernameInput.addEventListener("input", () => {
    let isValid = true;

    if (UsernameInput.value.length === 0) {
        isValid = false;
    }

    if (UsernameInput.value.length > 15) {
        alert("Limit Reached");
        isValid = false;
    }

    if (/^[a-g]/.test(UsernameInput.value)) {
        alert("First letter should be capital");
        isValid = false;
    }

    if (isValid) {
        UsernameInput.style.borderColor = "green";
    } else {
        UsernameInput.style.borderColor = "red";
    }
});
const EmailInput = document.getElementById('Email-input');

EmailInput.addEventListener("input", () => {
    let isValid = true;

    if (EmailInput.value.length < 7) {
        alert("Invalid email");
        isValid = false;
    }

    if (
        EmailInput.value.endsWith("@gmail.com") ||
        EmailInput.value.endsWith("@yahoo.com")
    ) {
        isValid = true;
    } else {
        alert("Email must end with @gmail.com or @yahoo.com");
        isValid = false;
    }

    if (isValid) {
        EmailInput.style.borderColor = "green";
    } else {
        EmailInput.style.borderColor = "red";
    }
});

const PasswordInput = document.getElementById('Password-input');


const submit = document.getElementById("Signup");


submit.addEventListener("click", () => {
    event.preventDefault();
    let isValid = true;
    if (PasswordInput.value.length < 5) {
        alert("Weak Password");
        isValid = false;
    }
    if (PasswordInput.value.length > 12) {
        alert("Invalid Password");
        isValid = false;

    }
    if (isValid) {
        PasswordInput.style.borderColor = "green";
    } else {
        PasswordInput.style.borderColor = "red";
    }
    UsernameInput.style.borderColor = "";
    EmailInput.style.borderColor = "";
    PasswordInput.style.borderColor = "";
    UsernameInput.value = '';
    UsernameInput.value = '';
    EmailInput.value = '';
    PasswordInput.value = '';
});
