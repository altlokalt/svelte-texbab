import { dev } from '$app/environment';
import { getPocketbase } from '$lib/utils/api';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

// export async function load({ params }) {
export async function load({ params }: { params: { slug: string } }) {

    try {
		const menuItems = await getPocketbase('texbab_fullmenu/records?page=1&perPage=30&sort=-created&filter=&expand=kategori%2Cingredients'); // the actual endpoint for menu items in your Pocketbase
		return menuItems;
	} catch (error) {
		throw new Error('Failed to fetch menu items.');
	}
}