// JS goes here

const menuButton = document.querySelector('.menuButton');
const navMenu = document.querySelector('.links');
const barOne = document.querySelector(".bar1");
const barTwo = document.querySelector(".bar2");
const barThree = document.querySelector(".bar3");
menuButton.addEventListener('click', (event) => {menuButton.classList.toggle("open")})
menuButton.addEventListener('click', (event) => (navMenu.classList.toggle('hidden')))

