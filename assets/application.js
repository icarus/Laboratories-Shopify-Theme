document.addEventListener('DOMContentLoaded', function() {
  // Function to open the cart modal
  function openCartModal() {
    document.getElementById('cartModal').style.display = 'block';
    // Load the cart content into the modal
    Shopify.getCart(function(cart) {
      // You need to render cart.liquid into the modal. You might need Shopify API or jQuery to load the content dynamically
    });
  }

  // Function to close the cart modal
  function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
  }

  // Event listener for closing the modal
  document.querySelector('.cart-modal-close').addEventListener('click', closeCartModal);

  // Event listener for cart button to open the modal
  document.getElementById('cartButton').addEventListener('click', openCartModal);

  // Event listener for Add to Cart button, if using AJAX
  // Otherwise, you'll need to attach this function to the AJAX 'success' callback
  document.querySelectorAll('form[action="/cart/add"]').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Perform AJAX add to cart request here
      // On success, call openCartModal();
    });
  });
});
