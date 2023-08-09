<script lang="ts">
	import Login from './Login.svelte';
	import ChatMessage from './ChatMessage.svelte';
	import { onMount } from 'svelte';

	import { authData } from '$lib/utils/stores';
	import { postPocketbase, getPocketbase } from '$lib/utils/api'; // Adjust these imports accordingly

	let newMessage: string = '';
	let messages: any[] = [];
	const key = '#foo';

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
		const chats = await getPocketbase('chat/records'); // Adjust this call according to your API

		console.log('chats', chats);
		chats.items.forEach(async (data: any) => {
			const sender = await getPocketbase(`_pb_users_auth_/records?&filter=id="${data.sender}"`); // Adjust this call according to your API
			console.log('sender', sender);
			var message = {
				who: sender.items[0].username, // Adjust this according to your PocketBase structure
				what: data.message,
				when: new Date(data.created).getTime() // Adjust the property name accordingly
			};

			if (message.what) {
				messages = [...messages.slice(-100), message].sort((a, b) => a.when - b.when);
				if (canAutoScroll) {
					autoScroll();
				} else {
					unreadMessages = true;
				}
			}
		});
	});

	async function sendMessage() {
		const data = {
			message: newMessage,
			sender: $authData.id // Assuming the authenticated user's username is available
		};
		const message = await postPocketbase('chat/records', data); // Adjust this call according to your API

		const index = new Date().toISOString();

		// Update this part to properly handle storing the message in PocketBase
		// You might need to use different methods/functions provided by PocketBase
		messages = [
			...messages,
			{
				who: $authData.username,
				what: newMessage,
				when: new Date().getTime()
			}
		];
		newMessage = '';
		canAutoScroll = true;
		autoScroll();
	}
</script>

<div class="container p-4 space-y-4">
  <h2 class="text-2xl font-bold mb-4">Join the Discussion</h2> <!-- Add a creative title -->

  <main on:scroll={watchScroll}>
    {#each messages as message (message.when)}
      <ChatMessage {message} sender={$authData.username} />
    {/each}

    <div class="dummy" bind:this={scrollBottom}></div>
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
        <button
          type="submit"
          disabled={!newMessage}
          class="btn btn-primary"
        >
          Send
        </button>
      </form>
    {:else}
      <div class="text-center">
        <p class="mb-2 text-gray-600">
          Log in to join the conversation
        </p>
        <Login />
      </div>
    {/if}
  </div>

  {#if !canAutoScroll}
    <div class="text-center">
      <button
        on:click={autoScroll}
        class="btn btn-secondary"
        class:red={unreadMessages}
      >
        {#if unreadMessages}
          💬
        {/if}
        👇
      </button>
    </div>
  {/if}
</div>

