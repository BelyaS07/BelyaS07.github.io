let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/remont-img.jpg') {
      myImage.setAttribute ('src','images/remont2.jpg');

    } else {
      myImage.setAttribute ('src','images/remont-img.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Аренда инструмента для Вас, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Аренда инструмента для Вас, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}