import { getPocketbase } from '$lib/utils/api';

// export async function load({ params }) {
export async function load({ params }: { params: { slug: string } }) {
	try {
		const menuItems = await getPocketbase('texbab_burger/records?page=1&perPage=30&sort=-created'); // the actual endpoint for menu items in your Pocketbase
		return menuItems;
	} catch (error) {
		throw new Error('Failed to fetch menu items.');
	}
}
