import { getPocketbase } from '$lib/utils/api';

export const ssr = false;

// export async function load({ params }) {
export async function load({ params }: { params: { slug: string } }) {
	const data = {
		sort: `-created`,
	};

	const menuItems = await getPocketbase('texbab_barnemenu', data).catch((error) => {
		throw error;
	});

	return {
		menuItems // Assuming menuItems.items is the array you want to return
	};
}

