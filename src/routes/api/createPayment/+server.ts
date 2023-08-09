import { error } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
export async function GET({ url }: any) {
	const response = await fetch(url.origin + '/api/processVippsPayment');
	const reference_uuid = uuidv4();
	const paymentUrl = 'https://apitest.vipps.no/epayment/v1/payments';
	const accessTokenResponse = await fetch(url.origin + '/api/processVippsPayment');
	const accessTokenData = await accessTokenResponse.json(); // Assuming the response body is JSON

	const accessToken = accessTokenData.token;

	const idempotencyKey = uuidv4();
	const clientId = 'ac1e327e-41b7-44dc-b573-1ba195cc75ee';
	const clientSecret = '_bFXM_SMeXGjjNa13HXuVq-vNI4=';
	const subscriptionKey = 'f9b577d8debe48c096dbc3531c9db16a';
	const merchantSerialNumber = '263020';

	// Prepare the request body, if needed
	const requestBody = {
		amount: {
			value: 4500,
			currency: 'NOK'
		},
		paymentMethod: {
			type: 'CARD'
		},
		customer: {
			phoneNumber: 4748431734
		},
		reference: `${reference_uuid}`,
		userFlow: 'WEB_REDIRECT',
		returnUrl: url.origin + '/order-confirmation?reference=`${reference_uuid}`',
		paymentDescription: 'Purchase of socks'
	};

	// Prepare the headers
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');

	// Get the access token
	const paymentResponse = await fetch('https://apitest.vipps.no/epayment/v1/payments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			Authorization: `Bearer ${accessToken}`,
			'Idempotency-Key': idempotencyKey,
			client_id: clientId,
			client_secret: clientSecret,
			'Ocp-Apim-Subscription-Key': subscriptionKey,
			'Merchant-Serial-Number': merchantSerialNumber
		},
		body: JSON.stringify(requestBody) // Include the request body if needed
	});

	// Handle the response
	if (paymentResponse.ok) {
		// If the response status is 2xx (successful)
		const data = await paymentResponse.json(); // Parse the response body as JSON
		return new Response(
			JSON.stringify({
				success: true,
				redirectUrl: data.redirectUrl,
				reference: data.reference,
				message: 'Payment processed successfully'
			}),
			{
				status: paymentResponse.status,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	} else {
		// If the response status is not successful
		console.error('Error:', paymentResponse.statusText);
		return new Response(
			JSON.stringify({ success: false, message: 'Error processing Vipps payment' }),
			{
				status: paymentResponse.status,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
}
