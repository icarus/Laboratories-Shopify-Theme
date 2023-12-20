onAddToCart = function(event) {
  event.preventDefault();

  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    data: $(this).serialize(),
    dataType: 'json',
    success: onCartUpdated,
    error: onError
  });
}


onCartUpdated = function() {
  $ajax({
    type: 'GET',
    url:'/cart',
    context: document.body,
    success: function(context) {
      let
        $dataCartContents = $(context).find('.js-cart-page-contents');
        dataCartHtml = $dataCartContents.html();
        dataCardItemCount = $dataCartContents.attr('data-cart-item-count');
        $miniCartContents = $('.js-mini-cart-contents');
        $cartItemCount = $('.js-cart-item-count');

      $cartItemCount.text(dataCartItemCount);
      $miniCartContents.html(dataCartHtml);
    }
  });
}

onError = function(XMLHttpRequest, textStatus) {
  let data = XMLHttpRequest.responseJSON;
  alert(data.status + ' - ' + data.message + ': ' + data.description);
}

openCart = function() {
  $('html').addClass('mini-cart-open');
}

closeCart = function() {
  $('html').removeClass('mini-cart-open');
}

onCartButtonClick = function(event) {
  event.preventDefault();

  let isCartOpen = $('html').hasClass('mini-cart-open');

  if (!isCartOpen) {
    openCart();
  } else {
    closeCart();
  }
}

$(document).on('submit', '#AddToCartForm', onAddToCart);
$(document).on('click', '.js-cart-link, #mini-cart, .js-close-button', onCartButtonClick);
