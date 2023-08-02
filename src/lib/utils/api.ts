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

