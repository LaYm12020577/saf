
//Function to create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    // const link = document.createElement('a');
    // link.href = `/product-details.html?id=${product.id}`;

    const image = document.createElement('img');
    image.src = `static/images/${product.image}`;
    image.alt = product.name;

    const name = document.createElement('h3');
    name.textContent = product.name;
    // name.href = `/product-details.html?id=${product.id}`;

    const price = document.createElement('p');
    price.textContent = `$${product.price.toFixed(2)}`;

    // card.appendChild(link);
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);

    // Add click event listener to the product card
    card.addEventListener('click', () => {
        // Redirect to the product details page when the card is clicked
        window.location.href = `/product-details.html?id=${product.id}`;
    });

    return card;
}


// Function to render products on page
function renderProducts() {
    const productContainer = document.querySelector('.product-list');

    products.forEach((product) => {
        const card = createProductCard(product);
        productContainer.appendChild(card);
    });
}

// Call the renderProduct function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
