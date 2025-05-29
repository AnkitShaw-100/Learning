// -----------------------------------------  DOM MANINPULATION  -----------------------------------------------------------
/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

/*
my code (error)
var para = document.querySelector(<p></p>);
const mark = () => {
    para.split('');
    for(var i = 0; i < para.length; i++){
        if(para[i].length > 8){
            <style>
                background-color : "yellow"
            </style>
        }
    }
    return true;
}
mark();
*/

const para = document.querySelector("p");
const mark = () => {
    const words = para.innerHTML.split(/\s+/);
    const updatedWords = words.map(word => {
        return word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word;
    });
    para.innerHTML = updatedWords.join(" ");
}
mark();

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/
const paragraph = document.querySelector('p');

const sourceLink = document.createElement('a');
sourceLink.href = "https://forcemipsum.com/";
sourceLink.target = "_blank";
sourceLink.rel = "noopener noreferrer";
sourceLink.textContent = "Source: ForceMipsum";

paragraph.insertAdjacentElement('afterend', sourceLink);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
/*
my code (error)
const para2 = document.querySelector("p");
const sentence = () => {
    const words = para.innerHTML.split(/\./);
    const updatedWords = words.map(word => {
        updatedWords();
    return word;
    });
    
    };

console.log(sentence());
*/

const para2 = document.querySelector("p");

const sentence = () => {
  // Split paragraph HTML by period `.`
  const sentences = para2.innerHTML.split('.');

  // Remove empty strings, trim spaces, and add a period back
  const updatedSentences = sentences
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .map(s => s + '.');

  // Join sentences with line breaks to put each on a new line
  return updatedSentences.join('<br>');
};

// Update the paragraph HTML with the sentences split on new lines
para2.innerHTML = sentence();
