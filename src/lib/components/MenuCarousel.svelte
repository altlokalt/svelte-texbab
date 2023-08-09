<script lang="ts">
	import HorizontalCard from '$lib/components/ui/HorizontalCard.svelte';
</script>

<h3 class="text-3xl font-semibold text-left mt-8 mb-4 mx-4">Utforsk vår herlige meny</h3>
<div class="flex overflow-x-auto carousel">
	<HorizontalCard
		title="Barne"
		img="https://img.freepik.com/premium-photo/children-pizzeria-cafe_236854-6997.jpg"
		url="/barne"
	/>
	<HorizontalCard
		title="Burger"
		img="https://api.texbab.no/api/files/eijp9z2zxlgrd4a/rzx50a9wq8sjf5q/0d537318c00611ec84202eb08599686b_a5987812_7e71_11eb_99f8_ea53df50c496_5cc54b47842a7094ebaec2aef0611d_p4L4GTD1XO.png"
		url="/burger"
	/>
	<HorizontalCard
		title="Eat Green"
		img="https://api.texbab.no/api/files/qlhqb7ir7o548t1/mkimb7hoxx1oz9i/main_header_WouOltkLLE.webp"
		url="/eat-green"
	/>
	<HorizontalCard
		title="Kebab"
		img="https://api.texbab.no/api/files/0zali0zpl9bb4yh/kvdj8zevopzn45m/download_1_GHHWWEdu1g.jpeg"
		url="/kebab"
	/>
	<HorizontalCard
		title="Pizza"
		img="https://api.texbab.no/api/files/latdufbxmqnxcrk/77v7kftyfnw4b2z/pizza_Lqbuwn5M31.jpg"
		url="/pizza"
	/>
	<HorizontalCard
		title="smaretter"
		img="https://api.texbab.no/api/files/izawv6hmhwokkqa/nv0fft46f7g54kg/badge_2_bg_2b4OkbBwRK.png"
		url="/smaretter"
	/>
	<HorizontalCard
		title="Special"
		img="https://api.texbab.no/api/files/izawv6hmhwokkqa/nv0fft46f7g54kg/badge_2_bg_2b4OkbBwRK.png"
		url="/special"
	/>
</div>
