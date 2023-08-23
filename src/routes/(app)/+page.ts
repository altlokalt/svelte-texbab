import { getPocketbase } from '$lib/utils/api';
import { page, pocketbaseResponse } from '$lib/utils/stores';

export const ssr = false;
const defaultMenu = 'texbab_barnemenu';

// export async function load({ params }) {
export async function load({ params }: { params: { slug: string } }) {
	let currentPage: any;
	page.subscribe((value) => {
		currentPage = value;
	});

	const data = {
		sort: `-food_image`,
		page: currentPage
	};

	const menuItems: any = await getPocketbase(defaultMenu, data).catch((error) => {
		throw error;
	});

	pocketbaseResponse.set(menuItems);

	return {
		menuItems, // Assuming menuItems.items is the array you want to return
		defaultMenu
	};
}
