// Function to retrieve the product details based on the product ID from the query parameter
function getProductDetails(productId) {
    return products.find((product) => product.id === parseInt(productId));
}

// Function to populate the product details on the page
function displayProductDetails() {
    // Retrieve the product ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Get the specific product details based on the product ID
    const productDetails = getProductDetails(productId);

    // Update the HTML elements on the page with the product details
    const productNameElement = document.getElementById('product-name');
    const productPriceElement = document.getElementById('product-price');
    const productDescriptionElement = document.getElementById('product-description');
    const productImageElement = document.getElementById('product-image');

    if (productDetails) {
      productNameElement.textContent = productDetails.name;
      productPriceElement.textContent = `$${productDetails.price.toFixed(2)}`;
      productDescriptionElement.textContent = productDetails.description;
      productImageElement.src = `static/images/${productDetails.image}`;
    } else {
      // If product not found, display an error message or redirect to a 404 page.
      productNameElement.textContent = 'Product not found';
    }
  }

// Call the function to display the product details when the page loads
document.addEventListener('DOMContentLoaded', displayProductDetails);
