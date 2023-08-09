<script lang="ts">
	export let message: any;
	export let sender;

	console.log('sender', sender, 'and message', message);

	const messageClass = message.who === sender ? 'chat-end' : 'chat-start';

	const avatar = `https://avatars.dicebear.com/api/initials/${message.who}.svg`;

	const ts = new Date(message.when);
</script>

<div class={`chat ${messageClass}`}>
	<div class="chat-image avatar">
		<div class="w-10 rounded-full">
			<img src={avatar} alt="avatar" />
		</div>
	</div>
	<div class="chat-header">
		{message.who}
		<time class="text-xs opacity-50">{ts.toLocaleTimeString()}</time>
	</div>
	<div class="chat-bubble">{message.what}</div>
	<div class="chat-footer opacity-50">Delivered</div>
</div>

