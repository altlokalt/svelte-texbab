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
		setTimeout(() => scrollBottom?.scrollIntoView({ behavior: 'smooth' }), 50);
		unreadMessages = false;
	}

	function watchScroll(e: any) {
		canAutoScroll = (e.target.scrollTop || Infinity) > lastScrollTop;
		lastScrollTop = e.target.scrollTop;
		unreadMessages = !canAutoScroll;
	}

	// import PocketBase from 'pocketbase';

	// let builtRecords = [];

	// async function getRecords() {
	// 	const records = await pb.collection('posts').getFullList(200, { sort: '-created' });

	// 	const results = records.map((record) => {
	// 		return {
	// 			title: record.title,
	// 			contents: record.contents,
	// 			likes: record.likes,
	// 			dislikes: record.dislikes,
	// 			id: record.id
	// 		};
	// 	});

	// 	return results;
	// }

	// pb.collection('posts').subscribe('*', async (e) => {
	// 	builtRecords = await getRecords();
	// });

	// onMount(async () => {
	// 	builtRecords = await getRecords();
	// });

	// onDestroy(() => {
	// 	pb.collection('posts').unsubscribe('*');
	// });

	onMount(async () => {
		try {
			// Get initial messages
			const resultList = await pb.collection('chat').getList(1, 50, {
				sort: 'created',
				expand: 'sender' // Check that 'sender' is the correct field name
			});

			messages = resultList.items;
			//console.log('messages: ', messages);

			// Subscribe to realtime messages
			unsubscribe = await pb.collection('chat').subscribe('*', async ({ action, record }) => {
				try {
					if (action === 'create') {
						const sender = await pb.collection('users').getOne(record.sender);
						record.expand = { sender };
						messages = [...messages, record];

						if ($authData.id !== record.receiver) {
							//console.log("caught one")
							unreadMessages = true; // Set unreadMessages to true for the receiver of the message
						}
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
			sender: $authData.id, // Assuming the authenticated user's username is available
			receiver: $authData.id // Set the receiver to the logged-in user's ID
		};
		const createdMessage = await postPocketbase('chat/records', data); // Adjust this call according to your API

		newMessage = '';
		canAutoScroll = true;
		autoScroll();
	}
</script>

<div class="container p-4 space-y-4">
	<h2 class="text-2xl font-bold mb-4">Join the Discussion</h2>

	<main class="overflow-y-auto max-h-[60vh]" on:scroll={watchScroll}>
		{#each messages as message (message.id)}
			<ChatMessage {message} sender={$authData.username} />
		{/each}
		<div class="dummy" bind:this={scrollBottom} />
	</main>

	{#if !canAutoScroll}
		<div class="text-center justify-center flex">
			<button on:click={autoScroll} class="btn btn-secondary">
				{#if unreadMessages && $authData.id === messages[messages.length - 1].receiver}
					💬
				{/if}
				🡣
			</button>
		</div>
	{/if}

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
</div>
