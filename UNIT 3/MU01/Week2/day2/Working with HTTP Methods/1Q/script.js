async function clickHandle() {
  try {
    let lists = document.getElementById("lists");
    lists.innerHTML = "";
    let category = document.getElementById("category").value;
    let res = await fetch(
      `https://682ddc2e746f8ca4a47ae3d8.mockapi.io/products?category=${category}`
    );
    let data = await res.json();
    data.forEach((ele) => {
      let div = document.createElement("div");
      div.innerHTML = `
<h3>${ele.name}</h3>
<img src="${ele.image}" alt="${ele.name}">
<p>$${ele.price}</p>
              `;
      lists.appendChild(div);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
}
