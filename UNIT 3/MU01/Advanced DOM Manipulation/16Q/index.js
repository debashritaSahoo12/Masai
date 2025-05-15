const products = [
    { id: 1, name: "Product A", price: 50, inStock: true },
    { id: 2, name: "Product B", price: 30, inStock: false },
    { id: 3, name: "Product C", price: 70, inStock: true },
    { id: 4, name: "Product D", price: 20, inStock: false }
];

const productGrid = document.querySelector('#product-grid');

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.classList.add(product.inStock ? 'in-stock' : 'out-of-stock');

    const productName = document.createElement('div');
    productName.classList.add('product-name');
    productName.textContent = product.name;

    const productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    productPrice.textContent = `$ ${product.price}`;

    const stockStatus = document.createElement('div');
    stockStatus.classList.add('stock-status');
    stockStatus.textContent = product.inStock ? 'In Stock' : 'Out of Stock';

    productElement.appendChild(productName);
    productElement.appendChild(productPrice);
    productElement.appendChild(stockStatus);

    productGrid.appendChild(productElement);
});