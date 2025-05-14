const item2 = document.querySelector("#item2");
item2.addEventListener("click", () => {
  let parent = item2.parentNode;
  alert(parent.textContent);
  console.log("previous:" + item2.previousElementSibling.textContent);
  console.log("next:" + item2.nextElementSibling.textContent);
});
