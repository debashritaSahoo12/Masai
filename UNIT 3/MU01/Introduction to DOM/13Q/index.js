const colorInput = document.querySelector("#color-input");
const changeBgBtn = document.querySelector("#change-bg-btn");
const textInput = document.querySelector("#text-input");
const updateTextBtn = document.querySelector("#update-text-btn");
const dynamicDiv = document.querySelector("#dynamic-div");

changeBgBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();
  dynamicDiv.style.backgroundColor = color;
});

updateTextBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
    dynamicDiv.innerText = text;
 
});
