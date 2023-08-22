<script lang="ts">
	import { authData } from '$lib/utils/stores';


	export let message: any;
	export let sender;

	//console.log('message: ', message, 'sender: ', message.expand?.sender.username);

	const messageClass = message.expand?.sender.username === sender ? 'chat-end' : 'chat-start';
	const avatar =  $authData.avatar ? `https://nameless-cloud-5581.fly.dev/api/files/_pb_users_auth_/7dbtzclvnds9jlp/${$authData.avatar}` : `https://avatars.dicebear.com/api/adventurer-neutral/${$authData.username}.svg`

	const ts = new Date(message.created);
</script>

<div class={`chat ${messageClass}`}>
	<div class="chat-image avatar">
		<div class="w-10 rounded-full">
			<img src={avatar} alt="avatar"/>
		</div>
	</div>
	<div class="chat-header">
		{message.expand?.sender.username}
		<time class="text-xs opacity-50">{ts.toLocaleTimeString()}</time>
	</div>
	<div class="chat-bubble">{message.message}</div>
	{#if messageClass === 'chat-end'}
		<div class="chat-footer opacity-50">Sent</div>
	{:else}
		<div class="chat-footer opacity-50">Delivered</div>
	{/if}
</div>
