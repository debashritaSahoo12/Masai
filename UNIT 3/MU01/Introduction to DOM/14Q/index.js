// JavaScript code with bugs
const para = document.querySelector("#message"); // Incorrect id
const textButton = document.getElementById("textButton"); // Incorrect method
textButton.addEventListener("click", () => {
  // Incorrect method name
  para.innerText = "New Message"; // Incorrect property
});

const box = document.getElementById("box");
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
  box.style.backgroundColor = "blue"; // Typo in 'style'
});
