<!-- PaymentMethod.svelte -->
<script>
    let selectedPaymentMethod = '';
  
    function handleSubmit() {
      // You can use the selectedPaymentMethod to process the payment method information, e.g., sending it to the server or storing it in the state.
      // For simplicity, we'll just log the selected payment method here.
      console.log('Selected Payment Method:', selectedPaymentMethod);
    }
  </script>
  
  <div class="border p-4 mb-4">
    <h2 class="font-semibold text-lg mb-2">Payment Method</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="grid grid-cols-2 gap-4">
        <label>
          <input type="radio" bind:group={selectedPaymentMethod} value="credit_card" required />
          <span class="ml-2 font-semibold">Credit Card</span>
        </label>
        <label>
          <input type="radio" bind:group={selectedPaymentMethod} value="paypal" required />
          <span class="ml-2 font-semibold">PayPal</span>
        </label>
        <!-- Add more payment method options as needed -->
      </div>
      <div class="text-right mt-4">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Place Order</button>
      </div>
    </form>
  </div>
  
  <style>
    /* Add styling for the payment method selection here */
  </style>
  