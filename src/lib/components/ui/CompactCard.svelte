<script lang="ts">
	export let item: any; // Specify the type for 'data'
    export let addToCart: any; 
</script>

<div class="card card-compact w-auto bg-base-100 shadow-xl">
    <figure>
      <img src={item.food_image ? 'https://api.texbab.no/api/files/' + item.collectionName + '/' + item.id + '/' + item.food_image : "https://api.texbab.no/api/files/vi08f0m1bznkfa3/lx41drdyghi9vpt/ingenbildetilgjengelig_3a5TR8Uzgq.webp" } alt={item.item} />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{item.item}</h2>
      <p>{item.price} kr</p>
      <p>{item.kommentar}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  </div>
  