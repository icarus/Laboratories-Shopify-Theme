$(document).ready(function() {
  // ... [other functions]

  openCart = function() {
      $('html').addClass('mini-cart-open');
  };

  closeCart = function() {
      $('html').removeClass('mini-cart-open');
  };

  $(document).on('click', '.js-cart-link', function(event) {
      event.preventDefault();
      let isCartOpen = $('html').hasClass('mini-cart-open');

      if (!isCartOpen) {
          openCart();
      } else {
          closeCart();
      }
  });

  // ... [other event handlers]
});
