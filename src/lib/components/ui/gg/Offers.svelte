<script>
	import OfferCard from '$lib/components/ui/gg/OfferCard.svelte';
</script>

<div class="space-bottom">
	<div class="container">
		<div class="row gy-4">
			<div class="col-xl-4 col-md-6">
				<OfferCard
					name="TEXBURGER"
					offerText="StudentRabatt på 20% Denne uke"
					image="assets/img/bg/discount_bg_1.jpg"
				/>
			</div>
			<div class="col-xl-4 col-md-6">
				<OfferCard
					name="TEXPIZZA"
					offerText="Kjøp over 500kr få 30% Rabatt"
					image="assets/img/bg/discount_bg_2.jpg"
				/>
			</div>
			<div class="col-xl-4 col-md-6">
				<OfferCard
					name="TEXPIZZA"
					offerText="25% Avslag, Lojale-kunder"
					image="assets/img/bg/discount_bg_3.jpg"
				/>
			</div>
		</div>
	</div>
</div>
