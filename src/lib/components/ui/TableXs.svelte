<script lang="ts">
	export let data: { items: any[] }; // Specify the type for 'data'

</script>


<div class="overflow-x-auto">
    <table class="table table-xs">
      <thead>
        <tr>
          <th></th> 
          <th>ID</th> 
          <th>Name</th> 
          <th>contact</th> 
          <th>location</th> 
          <th>created</th> 
          <th>status</th>
        </tr>
      </thead> 
      <tbody>
      
        {#each data.items.filter((order) => order.prepared && order.delivered) as order}
        <tr>
            <th>1</th> 
            <td>{order.id}</td> 
            <td>{order.firstName} {order.lastName}</td> 
            <td>{order.phoneNumber}</td> 
            <td>{order.address}</td> 
            <td>{order.created}</td> 
            <td>
                <span class="ml-auto">
                    {#if order.prepared}
                      <span class="px-2 py-1 rounded-lg bg-green-500 text-white text-xs">prepared</span>
                    {:else}
                      <span class="px-2 py-1 rounded-lg bg-red-500 text-white text-xs">Not prepared</span>
                    {/if}
                  </span>
                  <span class="ml-auto">
                    {#if order.delivered}
                      <span class="px-2 py-1 rounded-lg bg-green-500 text-white text-xs">delivered</span>
                    {:else}
                      <span class="px-2 py-1 rounded-lg bg-red-500 text-white text-xs">Not delivered</span>
                    {/if}
                  </span>
            </td>
          </tr>
      
      {/each}
      </tbody> 
      <tfoot>
        <tr>
          <th></th> 
          <th>Name</th> 
          <th>Job</th> 
          <th>company</th> 
          <th>location</th> 
          <th>Last Login</th> 
          <th>Favorite Color</th>
        </tr>
      </tfoot>
    </table>
  </div>