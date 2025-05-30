const hardText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.";

document.getElementById('displayText').textContent = hardText;

const text = document.querySelector("textarea");

text.addEventListener("input", () => {
    var userText = text.value;
    var textArr = hardText.split('');
    const currPos= userText.length-1;
        
        var userInput = userText.split('')[userText.length-1]
        console.log(userInput)
        if(userInput===textArr[currPos])
        {
            console.log(userInput +"==" +textArr[currPos]) 
            text.style.color="green";
        }
        else
        {
            console.log(userInput +"!==" +textArr[currPos])
            text.style.color="red";
        }

})