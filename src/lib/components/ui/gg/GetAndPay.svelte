<div class="col-xl-auto">
	<h2 class="sec-title text-center text-white">
		Hent og Betal<span class="font-style text-theme"> i Butikken!</span>
	</h2>
	<!-- down form action "https://themeholy.com/html/pizzan/demo/mail.php" -->
	<form
		action="https://themeholy.com/html/pizzan/demo/mail.php"
		method="POST"
		class="booking-form style2"
	>
		<div class="row">
			<div class="form-group col-lg-4">
				<input
					type="text"
					class="form-control date-pick"
					id="date-pick"
					name="date"
					placeholder="Velg Hente-Dato"
				/> <i class="fal fa-calendar-days" />
			</div>
			<div class="form-group col-lg-4">
				<input
					type="text"
					class="form-control time-pick"
					id="time-pick"
					name="time"
					placeholder="Velg Hente-tid"
				/> <i class="fal fa-clock" />
			</div>
			<div class="form-group col-lg-4">
				<input
					type="number"
					class="form-control"
					name="guest"
					id="guest"
					placeholder="Antall person"
				/> <i class="fal fa-user-group" />
			</div>
			<div class="form-group col-12">
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="3"
					class="form-control"
					placeholder="Er det noe andre ting vi bør ta hensyn til under matlagingen..."
				/> <i class="fal fa-comment" />
			</div>
			<div class="form-btn col-12 text-center">
				<button class="th-btn style3"> <a href="tel:+4740848494">KLIKK & HENT</a></button>
			</div>
		</div>
		<p class="form-messages mb-0 mt-3" />
	</form>
</div>
