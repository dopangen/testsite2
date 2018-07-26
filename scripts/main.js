var myHeading = document.querySelector('h1');
myHeading.textContent = 'welcome';
// Image switcher code
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img1.jpg') {
      myImage.setAttribute ('src','images/img2.jpg');
    } else {
      myImage.setAttribute ('src','images/img1.jpg');
    }
}
// Personalized welcome message code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'welcome, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'welcome, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
