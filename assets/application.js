onAddToCart = function(event) {
  event.preventDefault();

  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    data: ${this}.serialize(),
    dataType: 'json',
    success: onCartUpdated,
    error: onError
  })
}

onCartUpdated = function() {
  alert('cart is updated');
}

onError = function(XMLHttpRequest, textStatus) {
  
}
