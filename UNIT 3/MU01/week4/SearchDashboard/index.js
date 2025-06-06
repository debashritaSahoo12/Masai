
let names = [];
for (let i = 1; i < 300; i++) {
  names.push(`Name${i}`);
}
let timer,
  count = 0,
  debounces = 0;

//updating strokes
function updateStrokes() {
  let strokes = document.getElementById("strokes");
  strokes.innerHTML = `
<h4>Key Strokes:${count}<br>Debounce:${debounces}</h4>
`;
}
//debounce
document.getElementById("query").addEventListener("input", (event) => {
  count++;
  updateStrokes();
  clearTimeout(timer);
  timer = setTimeout(() => {
    debounces++;
    updateStrokes();
    searchQuery(event.target.value);
  }, 500);
});

//search here
function searchQuery(query) {
  let searched = names.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
  if (searched.length) {
    display(searched);
  } else {
    document.getElementById("lists").innerText = "No results found";
  }
}
//display the name
function display(names) {
  let lists = document.getElementById("lists");
  lists.innerHTML = "";
  names.forEach((name) => {
    let div = document.createElement("div");
    div.innerHTML = `
<h3>${name}</h3>
`;
    lists.appendChild(div);
  });
}

//throtling
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let now = Date.now();
  if (now - lastScroll >= 1000) {
    lastScroll = now;
  }
});

//after 200 button will be visible
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

//bactotop button
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});