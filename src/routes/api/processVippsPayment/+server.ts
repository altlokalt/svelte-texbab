import { error } from '@sveltejs/kit';

export async function GET({ url }: any) {
	const paymentUrl = 'https://apitest.vipps.no/accessToken/get';
	const clientId = 'ac1e327e-41b7-44dc-b573-1ba195cc75ee';
	const clientSecret = '_bFXM_SMeXGjjNa13HXuVq-vNI4=';
	const subscriptionKey = 'f9b577d8debe48c096dbc3531c9db16a';
	const merchantSerialNumber = '307288';

	// Prepare the request body, if needed
	const requestBody = {}; // Replace this with your actual request body if required

	// Prepare the headers
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');

	// Get the access token
	const tokenResponse = await fetch('https://apitest.vipps.no/accessToken/get', {
		method: 'POST',
		headers: {
			client_id: clientId,
			client_secret: clientSecret,
			'Ocp-Apim-Subscription-Key': subscriptionKey,
			'Merchant-Serial-Number': merchantSerialNumber
		},
		body: JSON.stringify(requestBody) // Include the request body if needed
	});

	// Handle the response
	if (tokenResponse.ok) {
		// If the response status is 2xx (successful)
		const data = await tokenResponse.json(); // Parse the response body as JSON

		return new Response(
			JSON.stringify({
				success: true,
				token: data.access_token,
				message: 'Payment processed successfully'
			}),
			{
				status: tokenResponse.status,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	} else {
		// If the response status is not successful
		console.error('Error:', tokenResponse.statusText);
		return new Response(
			JSON.stringify({ success: false, message: 'Error processing Vipps payment' }),
			{
				status: tokenResponse.status,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
}
