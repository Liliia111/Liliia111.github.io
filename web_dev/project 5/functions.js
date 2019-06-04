
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
//console.log("localStorage.getItem");

console.log(itemsArray);
localStorage.setItem('items', JSON.stringify(itemsArray));

const data = JSON.parse(localStorage.getItem('items'));
//console.log("getItem");
///console.log(data);
const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    itemsArray.push(input.value);
    console.log("itemsArray");
    console.log(itemsArray);
    localStorage.setItem('items', JSON.stringify(itemsArray));
   // console.log("setItem");
    //console.log(localStorage.setItem('items', JSON.stringify(itemsArray)));
    liMaker(input.value);
    input.value = "";
});

data.forEach(item => {
    liMaker(item);
});

button.addEventListener('click', function () {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    itemsArray = [];
});