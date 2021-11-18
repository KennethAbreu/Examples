document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newPara = document.createElement("p");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newPara.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newPara, currentDiv);
}
