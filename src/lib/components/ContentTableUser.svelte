<script lang="ts">
	import Chat from "./Chat.svelte";

    export let data: any;
    const avatar = data.avatar ? `https://nameless-cloud-5581.fly.dev/api/files/_pb_users_auth_/7dbtzclvnds9jlp/${data.avatar}` : `https://avatars.dicebear.com/api/adventurer-neutral/${data.username}.svg`
</script>

<tr>
    <td class="border-b border-primary p-5 text-sm">
        <div class="flex items-center">
            <div class="shrink-0">
                <span class="relative block">
                    <img
                        alt="profil"
                        src={avatar}
                        class="mx-auto h-10 w-10 rounded-full object-cover"
                    />
                </span>
            </div>
            <div class="ml-3">
                <p class="whitespace-nowrap">{data.username}</p>
            </div>
        </div>
    </td>
    <td class="border-b border-primary p-5 text-sm">
        <p class="whitespace-nowrap">{data.title}</p>
    </td>
    <td class="border-b border-primary p-5 text-sm">
        <p class="whitespace-nowrap">{data.created}</p>
    </td>
    <td class="border-b border-primary p-5 text-sm">
        <span
            class="relative inline-block px-3 py-1 font-semibold leading-tight"
        >
            <span
                aria-hidden="true"
                class="absolute inset-0 rounded-full bg-success opacity-50"
            />
            {#if data.verified}
            <span class="relative">verified</span>
            {:else}
            <span class="relative">not Verified</span>
            {/if}
        </span>
    </td>
    <td class="border-b border-primary p-5 text-sm">
        <span class="text-secondary hover:text-info"> Edit </span>
    </td>
</tr>

