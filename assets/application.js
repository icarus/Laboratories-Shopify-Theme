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

  document.querySelector('.cart-modal-close').addEventListener('click', closeCartModal);

  document.getElementById('cartButton').addEventListener('click', openCartModal);

  document.querySelectorAll('form[action="/cart/add"]').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
    });
  });
});
