"use strict";
// please do not delete the 'use strict' line above

document.getElementById("color-button").addEventListener("click", changeColor);
document.getElementById("image-button").addEventListener("click", changeImage);
document.getElementById("reset-button").addEventListener("click", resetPage);

//Changes background color
function changeColor() {
  const button = document.querySelector("#color-button");

  function randomNum() {
    return _.random(0, 255);
  }

  button.onclick = function () {
    const newColor = `RGB(${randomNum()}, ${randomNum()}, ${randomNum()})`; // add new variable
    document.body.style.backgroundColor = newColor; // sets the background color to this new string
  };
}
