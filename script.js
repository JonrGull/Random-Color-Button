"use strict";
// please do not delete the 'use strict' line above
document.getElementById("color-button").addEventListener("click", changeColor);
document.getElementById("image-button").addEventListener("click", changeImage);

//Changes background color
function changeColor() {
  const button = document.querySelector("#color-button");

  function randomNum() {
    return _.random(0, 255);
  }

  button.onclick = function () {
    const newColor = `RGB(${randomNum()}, ${randomNum()}, ${randomNum()})`; // add new variable
    document.body.style.backgroundColor = newColor; // sets the background color to this new string
    document.body.style.backgroundImage = null; // sets background image to null so we can view the colors again
  };
}

//Changes wallpaper
function changeImage() {
  const imgButton = document.querySelector("#image-button");

  function randomImage() {
    return _.random(0, 9);
  }

  let imageURL = [
    "url('https://i.ibb.co/hCfd1t5/casey-horner-d-QHP4ky-Cmw-unsplash.jpg')",
    "url('https://i.ibb.co/D8hrYQh/connor-jalbert-5-B1m-B7-Sdbg0-unsplash.jpg')",
    "url('https://i.ibb.co/znDyQGC/donald-giannatti-xd0-Oy7-RGJAE-unsplash.jpg')",
    "url('https://i.ibb.co/gR2DzP7/kellen-riggin-Dt-UKry6u-VDY-unsplash.jpg')",
    "url('https://i.ibb.co/bXzrv2z/andreas-m-ykfjtb0kph-U-unsplash.jpg')",
    "url('https://i.ibb.co/f49pcDV/erik-mclean-CKJYAc-Sc3-WE-unsplash.jpg')",
    "url('https://i.ibb.co/VtzcGN0/alexis-antoine-7-L5398c-O3-Zk-unsplash.jpg')",
    "url('https://i.ibb.co/5srT6B8/aaron-burden-kr1-Cx6-JSlc-E-unsplash.jpg')",
    "url('https://i.ibb.co/Jn9w6KV/mi-min-pkpqo-Bp11-Jc-unsplash.jpg')",
    "url('https://i.ibb.co/WVmCZ4p/donald-giannatti-e-HIJD9-CW7-RE-unsplash.jpg')",
  ];

  imgButton.onclick = function () {
    const newImage = randomImage();
    document.body.style.backgroundImage = imageURL[newImage];
  };
}
