<script lang="ts">
	export let data: { items: any[] }; // Specify the type for 'data'

</script>


<div class="overflow-x-auto">
    <table class="table table-xs">
      <thead>
        <tr>
          <th></th> 
          <th>Name</th> 
          <th>Job</th> 
          <th>company</th> 
          <th>location</th> 
          <th>Last Login</th> 
          <th>created</th>
        </tr>
      </thead> 
      <tbody>
      
        {#each data.items.filter((order) => order.prepared && order.delivered) as order}
        <tr>
            <th>1</th> 
            <td>{order.firstName} {order.lastName}</td> 
            <td>Quality Control Specialist</td> 
            <td>Littel, Schaden and Vandervort</td> 
            <td>{order.address}</td> 
            <td>{order.created}</td> 
            <td>Blue</td>
          </tr>
        <li class="border rounded-lg p-4 flex items-center">
          <label class="flex items-center space-x-2 cursor-pointer">
            <button
            class="form-checkbox h-4 w-4 text-indigo-600"
          />
            <span class="text-sm font-medium">{order.id}</span>
            <span class="text-sm">- {order.firstName} {order.lastName}</span>
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
          </label>
        </li>
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