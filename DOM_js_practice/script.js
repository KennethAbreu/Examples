const body = document.querySelector(".main"); 
const genres = ["Classics", "Crime", "Fiction", "History", "Mystery", "Paranormal", "Philosphy"];

const newPara = document.createElement("p");
newPara.innerHTML = genres.join(", ")

document.body.insertBefore(newPara, body);

let popGenres = "Popular Genres"
const newDiv = document.createElement("div");
newDiv.innerHTML = popGenres;

document.body.insertBefore(newDiv, newPara);

