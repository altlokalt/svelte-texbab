import { error } from '@sveltejs/kit';
import { v4 as uuid } from 'uuid';

export async  function GET({ url }: any) {
        const response = await fetch('https://de3d-20-229-142-68.ngrok-free.app/api/processVippsPayment')
        console.log(response);
   
        const paymentUrl = 'https://apitest.vipps.no/epayment/v1/payments';
        const accessToken = await fetch('/api/processVippsPayment');
        const idempotencyKey = ''
        const clientId = 'ac1e327e-41b7-44dc-b573-1ba195cc75ee';
        const clientSecret = '_bFXM_SMeXGjjNa13HXuVq-vNI4=';
        const subscriptionKey = 'f9b577d8debe48c096dbc3531c9db16a';
        const merchantSerialNumber = '307288';
      
        // Prepare the request body, if needed
        const requestBody = {
          "amount": {
            "value": 4500,
            "currency": "NOK"
          },
          "paymentMethod": {
            "type": "CARD"
          },
          "customer": {
            "phoneNumber": 4748431734
          },
          "reference": "34c31926-18b5-4d70-b605-6326f090fbaf",
          "userFlow": "WEB_REDIRECT",
          "returnUrl": "https://altlokal.com/redirect?reference=34c31926-18b5-4d70-b605-6326f090fbaf",
          "paymentDescription": "Purchase of socks"
        };
        
        // Prepare the headers
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
      
        // Get the access token
        const tokenResponse = await fetch('https://apitest.vipps.no/epayment/v1/payments', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Idempotency-Key': idempotencyKey,
            'client_id': clientId,
            'client_secret': clientSecret,
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Merchant-Serial-Number': merchantSerialNumber,
          },
          body: JSON.stringify(requestBody), // Include the request body if needed
          
        });
       
    
       // Handle the response
  if (tokenResponse.ok) {
    // If the response status is 2xx (successful)
    const data = await tokenResponse.json(); // Parse the response body as JSON
    console.log(data);
    return new Response(JSON.stringify({ success: true, redirect:data.access_token,  message: 'Payment processed successfully' }), {
      status: tokenResponse.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    // If the response status is not successful
    console.error('Error:', tokenResponse.statusText);
    return new Response(JSON.stringify({ success: false, message: 'Error processing Vipps payment' }), {
      status: tokenResponse.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
            
   
}