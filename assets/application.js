document.addEventListener('DOMContentLoaded', function() {
  var addToCartButton = document.getElementById('AddToCart');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default action of the button

      var addToCartForm = document.getElementById('AddToCartForm');
      if (addToCartForm) {
        var formData = new FormData(addToCartForm);

        fetch('/cart/add.js', {
          method: 'POST',
          body: formData
        })
        .then(response => {
          if (response.ok) {
            return response.json(); // Convert the JSON response into an object
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          console.log('Product added:', data);
          openCartModal(); // Function to open the cart modal
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
      }
    });
  }

  function openCartModal() {
    var cartModal = document.getElementById('cart-modal');
    if (cartModal) {
      console.log("HOLA PIPENE");
      cartModal.style.display = 'block';
    }
  }

  // Close Modal
  var modalCloseButton = document.querySelector('.modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', function() {
      var cartModal = document.getElementById('cart-modal');
      if (cartModal) {
        cartModal.style.display = 'none';
      }
    });
  }
});
