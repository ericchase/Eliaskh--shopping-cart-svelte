<script lang="ts">
  import CartProductCard from '$lib/component/CartProductCard.svelte';
  import { cartProductCountStore, cartProductStore, getTotalCostOfAllProducts } from '$lib/store/cart-store';
</script>

<div class="container">
  <div class="cards">
    {#each $cartProductStore as product}
      <CartProductCard {product} />
    {/each}
  </div>
  <div>
    <div class="checkOut">
      {#key $cartProductCountStore}
        <div class="total">Total: ${getTotalCostOfAllProducts().toFixed(2)}</div>
      {/key}
      <h2>pay the way you like</h2>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    gap: 1rem;
    padding: 1rem;
  }

  .cards {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 1rem;
    box-sizing: border-box;
  }

  .checkOut {
    background-color: var(--primary-color);
    font-size: 24px;
    font-weight: 600;
    border: 3px solid var(--secondary-color);
    border-radius: 1rem;
    position: sticky;
    top: 1rem;
    padding: 1rem 2rem;
  }

  .total {
    white-space: nowrap;
  }
</style>
