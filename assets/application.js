onAddToCart = function(event) {
  event.preventDefault();

  $.ajax({
    type: "POST",
    url: '/cart/add.js'
  })
}
