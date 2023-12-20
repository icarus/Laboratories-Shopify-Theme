document.addEventListener('DOMContentLoaded', function() {
  // Function to open the cart modal
  function openCartModal() {
    document.getElementById('cart-modal').style.display = 'block';
  }

  // Function to close the cart modal
  function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
  }

  // Event listener for the cart button to open the modal
  document.getElementById('cartButton').addEventListener('click', openCartModal);

  // Assuming you have a close button inside your modal with the id 'closeCartModalButton'
  document.getElementById('closeCartModalButton').addEventListener('click', closeCartModal);

  // Add more event listeners as needed for AJAX add to cart actions
});
