document.body.onload = addElement;
let text = "Sample Text"

function addElement () {
  // create a new p element
  const newPara = document.createElement("p");

  // and give it some content
  const newContent = document.createTextNode(text);

  // add the text node to the newly created p
  newPara.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newPara, currentDiv);
}
