document.addEventListener('DOMContentLoaded', function() {
  var addToCartButton = document.getElementById('AddToCart');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', function(e) {
      e.preventDefault();
      var cartModal = document.getElementById('cart-modal');
      if (cartModal) {
        console.log("Trying to open the cart modal...");
        cartModal.classList.add('open');
        console.log("Cart modal should now be open."); // Log when modal is opened
      } else {
        console.log("Cart modal element not found."); // Log if the modal element is not found
      }
    });
  }

  var modalCloseButton = document.querySelector('.modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', function() {
      var cartModal = document.getElementById('cart-modal');
      if (cartModal) {
        console.log("Trying to close the cart modal...");
        cartModal.classList.remove('open');
        console.log("Cart modal should now be closed."); // Log when modal is closed
      }
    });
  } else {
    console.log("Modal close button not found."); // Log if the close button is not found
  }
});
