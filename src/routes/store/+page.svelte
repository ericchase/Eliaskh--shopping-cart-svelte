<script lang="ts">
  import ProductCard from '$lib/component/ProductCard.svelte';
  import { getProductsByType, productTypes } from '$lib/lib';
  import { addToCart } from '$lib/store/cart-store';

  let selectedType = 'Coffee';
  $: console.log(selectedType);
</script>

<div class="container">
  <div class="btns">
    {#each productTypes as type}
      <button class="btn" on:click={(e) => (selectedType = e.currentTarget.value)} value={type}>{type}</button>
    {/each}
  </div>
  <div class="cardList">
    <div class="cards">
      {#each getProductsByType(selectedType) as product}
        <ProductCard {product} on:click={() => addToCart(product)} productUrl="/product/{selectedType}/{product.id}" />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .btns {
      padding: 1rem 0;
      .btn {
        align-self: start;
        font-size: 24px;
        box-sizing: border-box;
        margin: 1rem 7.5rem;
        background-color: var(--primary-color);
        border-radius: 8px;
        border: 2px solid var(--primary-color);
        padding: 0.5rem 1rem;
        &:hover {
          border: 2px solid var(--secondary-color);
        }
      }
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
