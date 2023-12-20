document.addEventListener('DOMContentLoaded', function() {

  function openCartModal() {
    document.getElementById('cartModal').style.display = 'block';

    Shopify.getCart(function(cart) {
      // You need to render cart.liquid into the modal. You might need Shopify API or jQuery to load the content dynamically
    });
  }

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
