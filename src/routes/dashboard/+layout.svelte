<script>
	import SideBar from '$lib/components/dashboard/sidebar/SideBar.svelte';
	import Feedback from '$lib/components/feedback/Feedback.svelte';
</script>

<div class="flex">
	<SideBar />
	<slot />
</div>
<Feedback />
