const crossedBar = document.querySelector('#crossedBar');
const burger = document.querySelector('#burger');
const firstCol = document.querySelector('#firstCol');
const secondCol = document.querySelector('#secondCol');
const thirdCol = document.querySelector('#thirdCol');

burger.addEventListener ('click', () => {
  crossedBar.classList.toggle('hidden');
  burger.classList.toggle('hidden');
  firstCol.classList.toggle('hidden');
  secondCol.classList.toggle('hidden');
  thirdCol.classList.toggle('hidden');
});

crossedBar.addEventListener ('click', () => {
  crossedBar.classList.toggle('hidden');
  burger.classList.toggle('hidden');
  firstCol.classList.toggle('hidden');
  secondCol.classList.toggle('hidden');
  thirdCol.classList.toggle('hidden');
});