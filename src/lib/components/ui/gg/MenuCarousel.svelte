<script lang="ts">
	import CategoryList from '$lib/components/ui/gg/CategoryList.svelte';
</script>

<div class="space bg-smoke2 position-relative">
	<h2 class="menu-title1">VI TA DIN BESTILLING VIA TELEFON</h2>
	<div class="container th-container">
		<div
			class="row th-carousel"
			data-slide-show="10"
			data-xl-slide-show="8"
			data-ml-slide-show="7"
			data-lg-slide-show="5"
			data-md-slide-show="5"
			data-sm-slide-show="4"
			data-xs-slide-show="3"
		>
			<CategoryList
				name="TEXPIZZA"
				image="assets/img/category/category_1_1.png"
				href="https://www.texbab.com/menu/texbab_fullmenu"
			/>

			<CategoryList
				name="TEXBURGER"
				image="assets/img/category/category_1_2.png"
				href="https://www.texbab.com/menu/texbab_fullmenu"
			/>

			<CategoryList
				name="TEXTALLERKEN"
				image="assets/img/category/category_1_3.png"
				href="https://www.texbab.com/menu/texbab_fullmenu"
			/>

			<CategoryList
				name="TEXFRYES"
				image="assets/img/category/category_1_4.png"
				href="https://www.texbab.com/menu/texbab_fullmenu"
			/>

			<CategoryList
				name="TEXSMÅRETTER"
				image="assets/img/category/category_1_5.png"
				href="https://www.texbab.com/menu/texbab_fullmenu"
			/>

			<CategoryList
				name="TEXBARN"
				image="assets/img/category/category_1_6.png"
				href="https://www.texbab.com/menu/texbab_fullmenu"
			/>

			<CategoryList
				name="TEXGREEN"
				image="assets/img/category/category_1_7.png"
				href="https://www.texbab.com/menu/texbab_fullmenu"
			/>

			<CategoryList
				name="TEXDRIKKE"
				image="assets/img/category/category_1_8.png"
				href="https://www.texbab.com/menu/texbab_fullmenu"
			/>

			<CategoryList
				name="TexBAGUTTER"
				image="assets/img/category/category_1_9.png"
				href="https://www.texbab.com/menu/texbab_fullmenu"
			/>

			<CategoryList
				name="TEXIS"
				image="assets/img/category/category_1_10.png"
				href="https://www.texbab.com/menu/texbab_fullmenu"
			/>

			<CategoryList
				name="TEXETTER"
				image="assets/img/category/category_1_5.png"
				href="https://www.texbab.com/menu/texbab_fullmenu"
			/>
		</div>
	</div>
</div>

<style>
	.bg-smoke2 {
		background-color: var(--smoke-color2) !important;
	}

	.bg-smoke2 {
		background-color: #f8f8f8;
	}
</style>
