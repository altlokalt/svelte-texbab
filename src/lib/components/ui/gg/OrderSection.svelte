<script lang="ts">
	import GetAndPay from '$lib/components/ui/gg/GetAndPay.svelte';
	import OpeningHours from '$lib/components/ui/gg/OpeningHours.svelte';
</script>

<section class="space bg-title position-relative" data-bg-src="assets/img/bg/booking_bg_2.png">
	<div class="container th-container">
		<div class="row justify-content-between align-items-center">
			<OpeningHours />
			<GetAndPay />
		</div>
		<div class="available-table-bg" data-bg-src="assets/img/bg/table_bg_1.jpg" />
	</div>
</section>
