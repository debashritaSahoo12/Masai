fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    const productGrid = document.getElementById("product-grid");

    data.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.classList.add(
        product.price > 50 ? "high-price" : "low-price"
      );

      const productImage = document.createElement("img");
      productImage.src = product.image;

      const productTitle = document.createElement("div");
      productTitle.classList.add("product-title");
      productTitle.textContent = product.title;

      const productPrice = document.createElement("div");
      productPrice.classList.add("product-price");
      productPrice.textContent = `$${product.price}`;

      productElement.appendChild(productImage);
      productElement.appendChild(productTitle);
      productElement.appendChild(productPrice);

      productGrid.appendChild(productElement);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
