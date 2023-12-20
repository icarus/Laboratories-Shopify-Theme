document.addEventListener('DOMContentLoaded', function() {
  var addToCartButton = document.getElementById('AddToCart');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log("Add to Cart button clicked");

      // Uncomment below when ready to use
      // var addToCartForm = document.getElementById('AddToCartForm');
      // if (addToCartForm) {
      //   var formData = new FormData(addToCartForm);

      showCartModal(); // Test showing the modal
      console.log("Show cart shown");
        // Uncomment below to enable adding to cart
        // fetch('/cart/add.js', {
        //   method: 'POST',
        //   body: formData
        // })
        // .then(response => {
        //   if (response.ok) {
        //     return response.json(); // Convert the JSON response into an object
        //   }
        //   throw new Error('Network response was not ok.');
        // })
        // .then(data => {
        //   console.log('Product added:', data);
        //   showCartModal(); // Show the cart modal
        // })
        // .catch(error => {
        //   console.error('There has been a problem with your fetch operation:', error);
        // });
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
