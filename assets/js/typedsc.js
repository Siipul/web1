const textArray = ["Student", "Human", "Or anything else?"];
let textIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) {
      textIndex = 0;
    }
    setTimeout(type, 500);
  }
}

function updateCursor() {
  if (charIndex === textArray[textIndex].length) {
    typedText.textContent = textArray[textIndex] + "|";
  } else {
    typedText.textContent = textArray[textIndex].substring(0, charIndex) + "|";
  }
}

type();
setInterval(updateCursor, 5);
