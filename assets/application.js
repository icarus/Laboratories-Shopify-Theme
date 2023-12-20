document.addEventListener('DOMContentLoaded', function() {
  var addToCartButton = document.getElementById('AddToCart');

    addToCartButton.addEventListener('click', function(e) {
      e.preventDefault();

      // Submit form with AJAX
      await fetch('/cart/add', {
        method: 'POST',
        body: new FormData(form),
    });
});
