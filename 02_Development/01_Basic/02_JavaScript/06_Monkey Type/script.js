const hardText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.";
document.getElementById('displayText').textContent = hardText;

const coloredText = document.getElementById("coloredText");
const text = document.querySelector("textarea");

text.addEventListener("input", () => {
    // 1.
    // var userText = text.value;
    // var textArr = hardText.split('');
    // var userInput = userText.split('')[userText.length-1]
    // console.log(userInput)
    // if(userInput===textArr[currPos])
    // {
    //     console.log(userInput +"==" +textArr[currPos]) 
    //     text.style.color="green";
    // }
    // else
    // {
    //     console.log(userInput +"!==" +textArr[currPos])
    //     text.style.color="red";
    // }

    // 2.
    // var userText = text.value;
    // var textArr = hardText.split('');
    // let isCorrect = true;

    // for( let i = 0; i < userText.length; i++){
    //     if(userText[i] !== textArr[i]){
    //         isCorrect = false;
    //         break;
    //     }
    // }
    // text.style.color = isCorrect ? "green" : "red";


    // 3.
    var userText = text.value;
    // var textArr = hardText.split('');
    let coloredHTML = "";

    for (let i = 0; i < hardText.length; i++) {
        if (i < userText.length) {
            if (userText[i] === hardText[i]) {
                coloredHTML += `<span style="color:green">${hardText[i]}</span>`;
            } else {
                coloredHTML += `<span style="color:red">${hardText[i]}</span>`;
            }
        } else {
            coloredHTML += `<span style="color:gray">${hardText[i]}</span>`;
        }
    }
    coloredText.innerHTML = coloredHTML;
})