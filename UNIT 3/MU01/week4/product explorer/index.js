let products = [];
let baseurl = "https://fakestoreapi.com/products";
let lists = document.getElementById("lists");

async function fetchProducts() {
  let res = await fetch(baseurl);
  let data = await res.json();
  products = data;
  displayProducts(data);
}
async function displayProducts(data) {
  lists.innerHTML = "";
  if (data.length == 0) {
    lists.innerHTML = "<p>No products found.</p>";
  }
  data.forEach((product) => {
    let div = document.createElement("div");
    div.innerHTML = `
     <img src="${product.image}" alt="${product.title}">
<h3>${product.title}</h3>
<p>$${product.price}</p>
<p>${product.category}</p>
     `;
    lists.appendChild(div);
  });
}

function applyFilters() {
  let query = document.getElementById("query").value.toLowerCase();
  let sorting = document.getElementById("sorting").value;
  let filtering = document.getElementById("filtering").value;

  let filtered = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query) &&
      (!filtering || product.category === filtering)
  );

  if (sorting === "lowToHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sorting === "highToLow") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sorting === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  displayProducts(filtered);
}
let timer;
document.getElementById("query").addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    applyFilters();
  }, 1000);
});
