<script lang="ts">
    export let data: any = {
            name: 'Marcus coco',
            role: 'Designer',
            status: 'Active',
            avatar: 'https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg',
            created: '01/10/2012',
            key: 1
        }
</script>

<tr>
    <td class="border-b border-primary p-5 text-sm">
        <div class="flex items-center">
            <div class="shrink-0">
                <span class="relative block">
                    <img
                        alt="profil"
                        src={data.avatar}
                        class="mx-auto h-10 w-10 rounded-full object-cover"
                    />
                </span>
            </div>
            <div class="ml-3">
                <p class="whitespace-nowrap">{data.name}</p>
            </div>
        </div>
    </td>
    <td class="border-b border-primary p-5 text-sm">
        <p class="whitespace-nowrap">{data.role}</p>
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
            <span class="relative">{data.status}</span>
        </span>
    </td>
    <td class="border-b border-primary p-5 text-sm">
        <span class="text-secondary hover:text-info"> Edit </span>
    </td>
</tr>