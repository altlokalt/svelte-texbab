<!-- PaymentMethod.svelte -->
<script lang="ts">
  // Declare a custom event
export let onOrderStatus: any;
export let onPaymentStatus: any;
export let selectedPaymentMethod: any;

// Function to handle payment method submission
async function handleSubmit() {
  // You can use the selectedPaymentMethod to determine which payment method was chosen
  // and perform the necessary actions accordingly.
  if (selectedPaymentMethod === 'credit_card') {
    // Handle credit card payment using Stripe
    try {
      // Replace this with your actual Stripe payment handling code
      const paymentResult = await processCreditCardPayment();
      console.log('Credit Card Payment Result:', paymentResult);
    } catch (error) {
      console.error('Error processing credit card payment:', error);
    }
  } else if (selectedPaymentMethod === 'paypal') {
    // Handle PayPal payment
    try {
      // Replace this with your actual PayPal payment handling code
      const paymentResult = await processPayPalPayment();
      console.log('PayPal Payment Result:', paymentResult);
    } catch (error) {
      console.error('Error processing PayPal payment:', error);
    }
  }  else if (selectedPaymentMethod === 'vipps') {
    // Handle vipps payment
    try {
      // Replace this with your actual vipps payment handling code
      const paymentResult = await processVippsPayment();
      console.log('vipps Payment Result:', paymentResult);
    } catch (error) {
      console.error('Error processing vipps payment:', error);
    }
  } else {
    // alert('Please select a payment method.');
    alert('Please select a payment method.');
  }

  // Emit custom events for order status and payment status
  onOrderStatus(true);
  onPaymentStatus(true);
}

// Replace these functions with your actual payment handling functions
async function processCreditCardPayment() {
  // Implement credit card payment handling using Stripe or other payment gateway
  // Return the payment result or handle the payment response as needed
  return { success: true, message: 'Credit Card Payment Successful' };
}

async function processPayPalPayment() {
  // Implement PayPal payment handling
  // Return the payment result or handle the payment response as needed
  return { success: true, message: 'PayPal Payment Successful' };
}

async function processVippsPayment() {
  // Implement vipps payment handling
  // Return the payment result or handle the payment response as needed
  return { success: true, message: 'vipps Payment Successful' };
}
</script>
  
  <div class="border p-4 mb-4">
    <h2 class="font-semibold text-lg mb-2">Payment Method</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="grid grid-cols-2 gap-4">
        <label>
          <input type="radio" bind:group={selectedPaymentMethod} value="vipps" required />
          <span class="ml-2 font-semibold">Vipps</span>
        </label>
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
  