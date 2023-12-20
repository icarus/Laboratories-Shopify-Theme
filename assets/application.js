document.addEventListener('DOMContentLoaded', function() {
  var addToCartButton = document.getElementById('AddToCart');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default form submission
      var cartModal = document.getElementById('cart-modal');
      if (cartModal) {
        cartModal.classList.add('open');
      }
    });
  }
});
