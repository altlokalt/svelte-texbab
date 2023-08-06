<script lang="ts">
	import BadgeCard from './ui/BadgeCard.svelte';
    let badges = [
        {
            name: "Barne",
            url: "/barne"
        },
        {
            name: "Burger",
            url: "/burger"
        },
        {
            name: "Drikke",
            url: "/drikke"
        },
        {
            name: "Kebab",
            url: "/kebab"
        },
        {
            name: "Kylling",
            url: "/kylling"
        },
        
    ];

</script>

    <div class=" w-full flex overflow-x-auto">
        {#each badges as badge}
        <BadgeCard name={badge.name} url={badge.url} />
    {/each}
    
    </div>
 
