<div class="col-xl-auto">
	<div class="available-table">
		<h3 class="available-table_title">Sommer-Åpningstida</h3>
		<p class="available-table_info">
			<span>Mandag - Onsdag</span><span>11:00 - 21:00</span>
		</p>
		<p class="available-table_info">
			<span>Torsdag - Fredag</span><span>11:00 - 22:00</span>
		</p>
		<p class="available-table_info"><span>Lørdag</span><span>10:00 - 22:00</span></p>
		<p class="available-table_info"><span>Søndag</span><span>12:00 - 21:00</span></p>
		<h3 class="available-table_title style2">RING for å BESTLLE</h3>
		<a href="tel:+4798466606" class="available-table_call">+474-0848-494</a>
	</div>
</div>

<style>
	.available-table {
		background-color: var(--white-color);
		padding: 45px 50px;
		border-radius: 20px;
		width: 500px;
		text-align: center;
		position: relative;
		z-index: 2;
	}
	.available-table_title {
		font-family: var(--style-font);
		font-size: 30px;
		border-bottom: 1px solid var(--theme-color);
		padding-bottom: 16px;
		margin-bottom: 30px;
		margin-top: -0.3em;
	}
	.available-table_title.style2 {
		border-bottom: none;
		margin-bottom: 0;
		padding-bottom: 8px;
		margin-top: 25px;
	}
	.available-table_info {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between;
		border-bottom: 1px dashed var(--gray-color);
		padding-bottom: 8px;
		margin-bottom: 8px;
	}
	.available-table_info span {
		display: inline-block;
	}
	.available-table_call {
		font-size: 24px;
		font-weight: 700;
		font-family: var(--title-font);
		padding-top: 10px;
		display: block;
		max-width: -webkit-fit-content;
		max-width: -moz-fit-content;
		max-width: fit-content;
		border-top: 1px soliD var(--theme-color);
		margin: 0 auto -0.2em auto;
	}

	@media (max-width: 1500px) {
		.available-table {
			width: 470px;
		}
	}
	@media (max-width: 1299px) {
		.available-table {
			width: 390px;
		}
	}
	@media (max-width: 1199px) {
		.available-table {
			width: 550px;
			margin: 0 auto 45px auto;
		}
	}
	@media (max-width: 575px) {
		.available-table {
			width: 100%;
			padding: 45px 20px;
		}
	}
</style>
