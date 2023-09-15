<script lang="ts">
	export let name: any;
	export let offerText: any;
	export let image: any;
</script>

<div class="offer-card" data-bg-src={image}>
	<h3 class="offer-title box-title">{name}</h3>
	<p class="offer-text">{offerText}</p>
	<a href="tel:+4740848494" class="line-btn">RING & BESTILLE</a>
</div>

<style>
	.offer-card {
		padding: 40px;
		border-radius: 10px;
		background-position: left center;
	}
	.offer-card .offer-title {
		color: var(--white-color);
		margin-bottom: 8px;
	}
	.offer-card .offer-text {
		color: var(--white-color);
		max-width: 145px;
		margin-bottom: 8px;
	}
	.offer-card .line-btn {
		color: var(--white-color);
	}
	.offer-card .line-btn:before {
		background-color: var(--white-color);
		width: 100%;
	}
	.offer-card .line-btn:hover:before {
		width: 35px;
	}

	.box-title {
		font-size: 24px;
		margin-top: -0.3em;
		line-height: 1.417;
	}
</style>
