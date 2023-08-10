<script lang="ts">
	import Login from './Login.svelte';
	import ChatMessage from './ChatMessage.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { authData } from '$lib/utils/stores';
	import { pb, postPocketbase } from '$lib/utils/api'; // Adjust these imports accordingly

	let newMessage: string = '';
	let messages: any[] = [];
	const key = '#foo';
	let unsubscribe: () => void;

	let scrollBottom: HTMLDivElement;
	let lastScrollTop: number = 0;
	let canAutoScroll = true;
	let unreadMessages = false;

	function autoScroll() {
		setTimeout(() => scrollBottom?.scrollIntoView({ behavior: 'auto' }), 50);
		unreadMessages = false;
	}

	function watchScroll(e: any) {
		canAutoScroll = (e.target.scrollTop || Infinity) > lastScrollTop;
		lastScrollTop = e.target.scrollTop;
	}

	onMount(async () => {
		try {
			// Get initial messages
			const resultList = await pb.collection('chat').getList(1, 50, {
				sort: 'created',
				expand: 'sender' // Check that 'sender' is the correct field name
			});

			messages = resultList.items;

			console.log('messages: ', messages);

			// Subscribe to realtime messages
			unsubscribe = await pb.collection('chat').subscribe('*', async ({ action, record }) => {
				try {
					if (action === 'create') {
						// Fetch associated user
						const user = await pb.collection('users').getOne(record.user); // Check the correct field name
						record.expand = { user };
						messages = [...messages, record];
					}
					if (action === 'delete') {
						messages = messages.filter((m) => m.id !== record.id);
					}
				} catch (error) {
					console.error('Realtime message subscription error:', error);
				}
			});
		} catch (error) {
			console.error('Fetching initial messages error:', error);
		}
	});

	// Unsubscribe from realtime messages
	onDestroy(() => {
		unsubscribe?.();
	});

	async function sendMessage() {
		const data = {
			message: newMessage,
			sender: $authData.id // Assuming the authenticated user's username is available
		};
		const createdMessage = await postPocketbase('chat/records', data); // Adjust this call according to your API

		newMessage = '';
		canAutoScroll = true;
		autoScroll();
	}
</script>

<div class="container p-4 space-y-4">
	<h2 class="text-2xl font-bold mb-4">Join the Discussion</h2>
	<!-- Add a creative title -->

	<main on:scroll={watchScroll}>
		{#each messages as message (message.id)}
			<ChatMessage {message} sender={$authData.username} />
		{/each}
		<div class="dummy" bind:this={scrollBottom} />
	</main>

	<div class="border-t pt-4">
		{#if $authData.username}
			<form on:submit|preventDefault={sendMessage} class="space-x-2 flex items-center">
				<input
					type="text"
					placeholder="Type a message..."
					bind:value={newMessage}
					maxlength="100"
					class="input input-bordered flex-grow"
				/>
				<button type="submit" disabled={!newMessage} class="btn btn-primary"> Send </button>
			</form>
		{:else}
			<div class="text-center">
				<p class="mb-2 text-gray-600">Log in to join the conversation</p>
				<Login />
			</div>
		{/if}
	</div>

	{#if !canAutoScroll}
		<div class="text-center">
			<button on:click={autoScroll} class="btn btn-secondary" class:red={unreadMessages}>
				{#if unreadMessages}
					💬
				{/if}
				👇
			</button>
		</div>
	{/if}
</div>
