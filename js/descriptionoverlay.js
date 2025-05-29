function showProductDescription(image, productName, description, price, discountedPrice) {
    var productDetails = `
      <div class="product-details">
        <div class="product-image">
          <img src="${image}" alt="${productName}">
        </div>
        <div class="product-info">
          <h2>${productName}</h2>
          <p>${description}</p>
          <p><strong>Price:</strong> ${price}</p>
          <p><strong>Discounted Price:</strong> ${discountedPrice}</p>
          <button>Add to Cart</button>
          <div class="quantity">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value="1" min="1">
          </div>
        </div>
      </div>
    `;
    document.getElementById('product-description').innerHTML = productDetails;
    document.getElementById('overlay').style.display = 'flex';
  }
  
  function closeProductDescription() {
    document.getElementById('overlay').style.display = 'none';
  }
  