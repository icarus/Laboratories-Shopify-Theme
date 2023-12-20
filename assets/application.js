document.addEventListener('DOMContentLoaded', function() {
  var addToCartButton = document.getElementById('AddToCart');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', function() {
      var cartModal = document.getElementById('cart-modal');
      cartModal.classList.add('open');
    });
  }
});
