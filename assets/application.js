document.addEventListener('DOMContentLoaded', function() {
  var addToCartButton = document.getElementById('AddToCart');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', function() {
      e.preventDefault();
      var cartModal = document.getElementById('cart-modal');
      if (cartModal) {
        cartModal.classList.add('open');
      }
    });
  }
});
