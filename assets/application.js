document.addEventListener('DOMContentLoaded', function() {
  var addToCartButton = document.getElementById('AddToCart');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', function(e) {
      console.log("Add to Cart button clicked");
      e.preventDefault(); // Prevent the default action of the button

      var addToCartForm = document.getElementById('AddToCartForm');
      if (addToCartForm) {
        var formData = new FormData(addToCartForm);

        showCartModal();
      //   fetch('/cart/add.js', {
      //     method: 'POST',
      //     body: formData
      //   })
      //   .then(response => {
      //     if (response.ok) {
      //       return response.json(); // Convert the JSON response into an object
      //     }
      //     throw new Error('Network response was not ok.');
      //   })
      //   .then(data => {
      //     console.log('Product added:', data);
      //     showCartModal(); // Directly show the cart modal
      //   })
      //   .catch(error => {
      //     console.error('There has been a problem with your fetch operation:', error);
      //   });
      // }
    });
  }

  function showCartModal() {
    var cartModal = document.getElementById('cart-modal');
    if (cartModal) {
      console.log("Showing cart modal");
      cartModal.classList.add('open');
    }
  }

  // Close Modal
  var modalCloseButton = document.querySelector('.modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', function() {
      var cartModal = document.getElementById('cart-modal');
      if (cartModal) {
        cartModal.style.display = 'none';
        cartModal.classList.remove('open');
      }
    });
  }
});
