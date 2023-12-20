onAddToCart = function(event) {
  event.preventDefault();

  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    data: ${this}.serialize(),
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
      let $dataCartContents = $(context).find('.js-cart-page-contents');
      dataCartHtml = $dataCartContents.html();
      dataCardItemCount = $dataCartContents.attr('data-cart-item-count');
      $miniCartContents = $('.js-mini-cart-contents');
    }
  })
}

onError = function(XMLHttpRequest, textStatus) {
  let data = XMLHttpRequest.responseJSON;
  alert(data.status + ' - ' + data.message + ': ' + data.description);
}

$(document).on('submit', '#AddToCartForm"]', onAddToCart);
