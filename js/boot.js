window.onload = function() {

const bootScreen = document.getElementById('bootScreen');

const homepage = document.getElementById('homepage');

setTimeout(function() {

bootScreen.style.display = 'none';

homepage.style.display = 'block';

setTimeout(function() {

window.location.href = "main.html";

}, 5000);

}, 5000);

}