<script lang="ts">
  import CartItemCard from '$lib/component/CartItemCard.svelte';
  import products from '$lib/data/product.json';

  let total: number = 10;
</script>

<div class="container">
  <div class="cards"><CartItemCard items={products.coffee} /></div>
  <div class="checkOut">
    <div>Total:</div>
    <div>${total}</div>
    <h2>pay the way you like</h2>
  </div>
</div>

<style lang="scss">
  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
    box-sizing: border-box;
  }

  .cards {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
    box-sizing: border-box;
    padding: 0 1rem;
  }

  .checkOut {
    background-color: var(--primary-color);
    padding: 1rem 2rem;
    font-size: 24px;
    font-weight: 600;
    border: 3px solid var(--secondary-color);
    border-radius: 1rem;
    div {
      display: inline;
    }
  }
</style>
