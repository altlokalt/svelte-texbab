// For demonstration purposes, this is a simple mock API service that returns static data.
// In a real-world scenario, you would replace this with actual API calls to your backend.

const menuItems = [
	{ id: 1, name: 'Item 1', price: 10, description: 'Description of item 1' },
	{ id: 2, name: 'Item 2', price: 15, description: 'Description of item 2' },
	// Add more menu items as needed
];

export async function fetchMenuItems() {
	// Simulate API request delay with a timeout
	await new Promise(resolve => setTimeout(resolve, 500));
	return menuItems;
}

export async function placeOrder(orderData: any) {
	// Simulate API request delay with a timeout
	await new Promise(resolve => setTimeout(resolve, 1000));
	// Return a mock order confirmation response
	return { orderId: 12345, totalAmount: orderData.totalAmount, deliveryAddress: orderData.deliveryAddress };
}


export const getPocketbase = async (endpoint: string) => {
	const response = await fetch('https://api.texbab.no/api/collections/' + endpoint)
	const isJson = response.headers.get('content-type')?.includes('application/json')
	const res = isJson ? await response.json() : await response.text()
    // console.log("data from pocketbase:", res.items)

	if (response?.status > 399) {
		throw { status: response.status, message: response.statusText }
	} else {
		return res
	}
}

export const postPocketbase = async (endpoint: string, data: any) => {
	try {
	  const response = await fetch(`https://api.texbab.no/api/collections/${endpoint}`, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	  });
  
	  if (!response.ok) {
		throw new Error('Failed to post data to Pocketbase.');
	  }
  
	  const res = await response.json();
	  return res;
	} catch (error) {
	  console.error(error);
	  throw error;
	}
  };
  

  export const patchPocketbase = async (endpoint: string, data: any) => {
	try {
	  const response = await fetch(`https://api.texbab.no/api/collections/${endpoint}`, {
		method: 'PATCH',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	  });
  
	  if (!response.ok) {
		throw new Error('Failed to post data to Pocketbase.');
	  }
  
	  const res = await response.json();
	  return res;
	} catch (error) {
	  console.error(error);
	  throw error;
	}
  };

export const getImage= async (endpoint: string) => {
	const response = await fetch('https://api.texbab.no/api/files/' + endpoint)
	const isJson = response.headers.get('content-type')?.includes('application/json')
	const res = isJson ? await response.json() : await response.text()
    // console.log("data from pocketbase:", res.items)

	if (response?.status > 399) {
		throw { status: response.status, message: response.statusText }
	} else {
		return res
	}
}


// Replace these functions with your actual payment handling functions
export async function processCreditCardPayment() {
	// Implement credit card payment handling using Stripe or other payment gateway
	// Return the payment result or handle the payment response as needed
	return { success: true, message: 'Credit Card Payment Successful' };
  }
  
  export async function processPayPalPayment() {
	// Implement PayPal payment handling
	// Return the payment result or handle the payment response as needed
	return { success: true, message: 'PayPal Payment Successful' };
  }
	// Function to handle Vipps payment
	export async function processVippsPayment() {
	  try {
		// You will need to replace the following placeholders with your actual Vipps credentials and payment details
		const clientId = 'YOUR_VIPPS_CLIENT_ID';
		const merchantSerialNumber = 'YOUR_MERCHANT_SERIAL_NUMBER';
		const amount = 100; // Replace with the actual order amount
		const orderId = 'YOUR_ORDER_ID'; // Replace with a unique order ID
		const callbackUrl = 'YOUR_VIPPS_CALLBACK_URL'; // Replace with the URL where Vipps will redirect after payment
		const isTestEnvironment = true; // Set to false for production environment
  
		// Construct the payment URL based on Vipps Web Integration documentation
		const paymentUrl = `https://api.vipps.no/paymentapi/v2/payments`;
		const response = await fetch(paymentUrl, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${clientId}`,
		  },
		  body: JSON.stringify({
			merchantSerialNumber,
			orderId,
			amount,
			callbackUrl,
			isTestEnvironment,
		  }),
		});
  
		if (!response.ok) {
		  throw new Error('Failed to initiate Vipps payment.');
		}
  
		const paymentData = await response.json();
  
		// You should redirect the user to the provided redirect URL to proceed with the Vipps payment
		window.location.href = paymentData.url;
		return { success: true, message: 'Vipps Payment Successful' };
	  } catch (error: any) {
		console.error('Error processing Vipps payment:', error.message);
		// Handle payment failure
		return { success: false, message: 'Error processing Vipps payment' };
	  }
	}
