var qrcode = new QRCode("qrResult", {
    text: "http://jindo.dev.naver.com/collie",
    width: 64,
    height: 64,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

qrcode.clear();
qrcode.makeCode("http://naver.com");

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", () => {
    qrInput = document.getElementById('qrInput').value;
    const resultDiv = document.getElementById("qrResult");
    resultDiv.innerHTML = "";

    if (qrInput.trim() !== '') {
        qrcode.clear(); // Clear previous QR
        qrcode.makeCode(qrInput);
    }
    else {
        alert("Please enter some text");
    }

})

