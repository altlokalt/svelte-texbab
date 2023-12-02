<script lang="ts">
	export let name: any;
	export let href: any;
	export let image: any;
</script>

<div class="col-auto">
	<div class="category-list">
		<div class="category-list_icon"><img src={image} alt="icon" /></div>
		<a {href} class="category-list_name">{name}</a>
	</div>
</div>

<style>
	.category-list {
		text-align: center;
	}
	.category-list_icon img {
		height: 58px;
	}
	.category-list_name {
		margin-top: 12px;
		font-size: 16px;
		font-weight: 500;
		color: var(--title-color);
		display: inline-block;
	}
	.category-list_name:hover {
		color: var(--theme-color);
	}

	@media (max-width: 375px) {
		.category-list_name {
			font-size: 14px;
		}
	}
</style>
