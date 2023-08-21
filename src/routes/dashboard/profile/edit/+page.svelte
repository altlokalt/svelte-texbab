<script>
	let data = {
		name: 'Alex',
		email: 'al	',
		title: 'UI/UX Designer',
		place: 'California',
		about: 'Doing what I love, part time traveller',
		avatar:
			'https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg',
		language: 'English',
		timezone: 'IST',
		syncData: true
	};

	async function updateProfile() {

		console.log('data, 	q', data);
	}
</script>

<svelte:head>
	<title>University Pictures</title>
</svelte:head>

<p>Edit</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<input
		type="text"
		placeholder="Type a message..."
		bind:value={data.name}
		maxlength="100"
		class="input input-bordered flex-grow"
	/>
	<input
		type="text"
		placeholder="your email..."
		bind:value={data.email}
		maxlength="100"
		class="input input-bordered flex-grow"
	/>
	<input
		type="text"
		placeholder="your title..."
		bind:value={data.title}
		maxlength="100"
		class="input input-bordered flex-grow"
	/>
	<input
		type="text"
		placeholder="your place..."
		bind:value={data.place}
		maxlength="100"
		class="input input-bordered flex-grow"
	/>

	<textarea
		placeholder="Type a message..."
		bind:value={data.about}
		maxlength="100"
		class="input input-bordered flex-grow"
	/>
</div>
<div class="divider" />

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<input
		type="text"
		placeholder="your language..."
		bind:value={data.language}
		maxlength="100"
		class="input input-bordered flex-grow"
	/>
	<input
		type="text"
		placeholder="your timezone..."
		bind:value={data.timezone}
		maxlength="100"
		class="input input-bordered flex-grow"
	/>
	<input type="checkbox" class="toggle toggle-lg" bind:checked={data.syncData} />

</div>

<div class="mt-16">
	<button class="btn btn-primary float-right" on:click={updateProfile}>Update</button>
</div>
