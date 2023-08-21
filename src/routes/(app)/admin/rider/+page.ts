import { getPocketbase } from '$lib/utils/api';

// export async function load({ params }) {
export async function load({ params }: { params: { slug: string } }) {
	try {
		const orders = await getPocketbase(
			'texbab_orders/records?page=1&perPage=30&sort=-created&filter=prepared=true&expand='
		); // the actual endpoint for menu items in your Pocketbase
		return orders;
	} catch (error) {
		throw new Error('Failed to fetch orders.');
	}
}
