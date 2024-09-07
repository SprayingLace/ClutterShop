<script>
  document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
      const action = this.getAttribute('data-action');
      const input = this.parentNode.querySelector('input[type="number"]');
      let currentValue = parseInt(input.value);

      if (action === 'increment' && currentValue < input.max) {
        input.value = currentValue + 1;
      }
      if (action === 'decrement' && currentValue > input.min) {
        input.value = currentValue - 1;
      }
    });
  });
</script>
