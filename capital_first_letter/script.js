const list = document.querySelector('.output');
list.innerHTML = '';
let cities = ['toKyo','deNVer','bErLin','rIO','boGota','moSCow','nAiRobi','maRsella'];

for (let i = 0; i < cities.length; i++) {
    let input = cities[i];
    let lower = input.toLowerCase();
    let firstLetter = lower[0].toUpperCase();
    let capitalized = lower.replace(lower[0], firstLetter);
    let result = capitalized;
    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);

}