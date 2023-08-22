<script lang="ts">
	import HorizontalCard from '$lib/components/ui/HorizontalCard.svelte';
</script>

<h3 class="text-3xl font-semibold text-left mt-8 mb-4 mx-4">Utforsk vår herlige meny</h3>
<div class="flex overflow-x-auto carousel">
	<HorizontalCard
		title="Barne"
		img="https://img.freepik.com/premium-photo/children-pizzeria-cafe_236854-6997.jpg"
		url="/menu/barne"
	/>
	<HorizontalCard
		title="Burger"
		img="{import.meta.env.VITE_PB_URL}/api/files/eijp9z2zxlgrd4a/rzx50a9wq8sjf5q/0d537318c00611ec84202eb08599686b_a5987812_7e71_11eb_99f8_ea53df50c496_5cc54b47842a7094ebaec2aef0611d_p4L4GTD1XO.png"
		url="/menu/burger"
	/>
	<HorizontalCard
		title="Eat Green"
		img="{import.meta.env.VITE_PB_URL}/api/files/qlhqb7ir7o548t1/mkimb7hoxx1oz9i/main_header_WouOltkLLE.webp"
		url="/menu/eat-green"
	/>
	<HorizontalCard
		title="Kebab"
		img="{import.meta.env.VITE_PB_URL}/api/files/0zali0zpl9bb4yh/kvdj8zevopzn45m/download_1_GHHWWEdu1g.jpeg"
		url="/menu/kebab"
	/>
	<HorizontalCard
		title="Pizza"
		img="{import.meta.env.VITE_PB_URL}/api/files/latdufbxmqnxcrk/77v7kftyfnw4b2z/pizza_Lqbuwn5M31.jpg"
		url="/menu/pizza"
	/>
	<HorizontalCard
		title="smaretter"
		img="{import.meta.env.VITE_PB_URL}/api/files/izawv6hmhwokkqa/nv0fft46f7g54kg/badge_2_bg_2b4OkbBwRK.png"
		url="/menu/smaretter"
	/>
	<HorizontalCard
		title="Special"
		img="{import.meta.env.VITE_PB_URL}/api/files/izawv6hmhwokkqa/nv0fft46f7g54kg/badge_2_bg_2b4OkbBwRK.png"
		url="/menu/special"
	/>
</div>
