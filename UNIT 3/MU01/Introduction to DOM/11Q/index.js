const heading = document.getElementById("heading");
heading.innerText = "Welcome to the DOM World!";

const paragraphs = document.getElementsByTagName("p");
Array.from(paragraphs).forEach((p) => {
  p.style.color = "blue";
});

const container = document.querySelector(".container");
container.style.backgroundColor = "yellow";
