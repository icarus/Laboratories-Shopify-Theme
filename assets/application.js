document.addEventListener('DOMContentLoaded', function() {
  var addToCartButton = document.getElementById('AddToCart');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log("Add to Cart button clicked");
      showCartModal();
    });
  }

  function showCartModal() {
    var cartModal = document.getElementById('cart-modal');
    if (cartModal) {
      console.log("Showing cart modal");
      cartModal.classList.add('open');
    }
  }

  // Close Modal - Check if the button exists
  var modalCloseButton = document.querySelector('.modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', function() {
      var cartModal = document.getElementById('cart-modal');
      if (cartModal) {
        cartModal.classList.remove('open');
      }
    });
  }
});
