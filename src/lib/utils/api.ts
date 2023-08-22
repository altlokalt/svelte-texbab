import PocketBase from 'pocketbase';
import { authData } from '$lib/utils/stores';
import { goto } from '$app/navigation';

export const pb = new PocketBase(`${import.meta.env.VITE_PB_URL}`);
export const pb2 = new PocketBase(`${import.meta.env.VITE_PB_API_2}`);

export const authPocketbase = async (user: string, password: string) => {
	const res = await pb.collection('users').authWithPassword(user, password);
	const res2 = await pb2.collection('users').authWithPassword(user, password);
	authData.set(pb.authStore.model);

	goto('/');
	if (!pb.authStore.isValid) {
		throw { status: pb.authStore.isValid, message: pb.authStore.token };
	} else {
		return res;
	}
};

export const logoutPocketbase = async () => {
	pb.authStore.clear();
	pb2.authStore.clear();
	authData.set({});

	goto('/');
	if (!pb.authStore.isValid) {
		return { status: 200, message: 'logged out' };
	} else {
		throw { message: 'something went wrong' };
	}
};

export const createPocketbaseUser = async (data: any) => {
	const res = await pb.collection('users').create(data);
	authData.set(res);

	// (optional) send an email verification request and chat using the new pb2 api
	const data2 = {
		id: res.id,
		username: data.username,
		email: data.email,
		emailVisibility: data.emailVisibility,
		password: data.password,
		passwordConfirm: data.passwordConfirm
	};

	const res2 = await pb2.collection('users').create(data2);

	// (optional) send an email verification request
	await pb2.collection('users').requestVerification(data.email);

	// login the user
	await authPocketbase(data.username, data.password);

	if (!pb.authStore.isValid) {
		throw { status: pb.authStore.isValid, message: pb.authStore.token };
	} else {
		return res;
	}
};

export const authPocketbaseAdmin = async (user: string, password: string) => {
	const res = await pb.admins.authWithPassword(user, password);
	const res2 = await pb2.admins.authWithPassword(user, password);
	authData.set(res);

	if (!pb.authStore.isValid) {
		throw { status: pb.authStore.isValid, message: pb.authStore.token };
	} else {
		return res;
	}
};

// refresh the login data
export const refreshAuthPocketbase = async () => {
	try {
		// Update authData store
		const user = await pb.collection('users').authRefresh({
			refreshToken: pb.authStore.token
		});
		authData.set(user);

		return user;
	} catch (error) {
		throw error;
	}
};

const menuItems = [
	{ id: 1, name: 'Item 1', price: 10, description: 'Description of item 1' },
	{ id: 2, name: 'Item 2', price: 15, description: 'Description of item 2' }
	// Add more menu items as needed
];

export async function fetchMenuItems(menu: string) {
	// Simulate API request delay with a timeout
	await new Promise((resolve) => setTimeout(resolve, 500));

	return menuItems;
}

export async function placeOrder(orderData: any) {
	// Simulate API request delay with a timeout
	await new Promise((resolve) => setTimeout(resolve, 1000));
	// Return a mock order confirmation response
	return {
		orderId: 12345,
		totalAmount: orderData.totalAmount,
		deliveryAddress: orderData.deliveryAddress
	};
}

export const getPocketbase = async (endpoint: string) => {
	const response = await fetch(`${import.meta.env.VITE_PB_URL}/api/collections/` + endpoint);
	const isJson = response.headers.get('content-type')?.includes('application/json');
	const res = isJson ? await response.json() : await response.text();

	if (response?.status > 399) {
		throw { status: response.status, message: response.statusText };
	} else {
		return res;
	}
};

export const postPocketbase = async (endpoint: string, data: any) => {
	try {
		const response = await fetch(`${import.meta.env.VITE_PB_URL}/api/collections/${endpoint}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
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

export const patchPocketbase = async (collection: string, id: string, data: any) => {
	try {
		const response = await pb.collection(collection).update(id, data);
		const response2 = await pb2.collection(collection).update(id, data);
		return response;
	} catch (error) {
		throw error;
	}
};

export const getImage = async (endpoint: string) => {
	const response = await fetch(`${import.meta.env.VITE_PB_URL}/api/files/` + endpoint);
	const isJson = response.headers.get('content-type')?.includes('application/json');
	const res = isJson ? await response.json() : await response.text();
	// console.log("data from pocketbase:", res.items)

	if (response?.status > 399) {
		throw { status: response.status, message: response.statusText };
	} else {
		return res;
	}
};

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
export async function processVippsPayment(data: any) {
	try {
		const paymentDataResponse = await fetch('/api/createPayment');
		const paymentData = await paymentDataResponse.json(); // Assuming the response body is JSON

		// You should redirect the user to the provided redirect URL to proceed with the Vipps payment
		window.location.href = paymentData.redirectUrl;
		return paymentData;
	} catch (error: any) {
		console.error('Error processing Vipps payment:', error.message);
		// Handle payment failure
		return { success: false, message: 'Error processing Vipps payment' };
	}
}
