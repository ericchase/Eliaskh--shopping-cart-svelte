<script lang="ts">
  import ProductCard from '$lib/component/ProductCard.svelte';
  import products from '$lib/data/product.json';
  import type { Product } from '$lib/model/product';
  import { addToCart } from '$lib/store/cart-store';

  let productList: Product[] = products[0].list;
  let type: string = 'Coffee';

  function handleClick(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    switch (e.currentTarget.value) {
      case 'coffee':
        productList = products[0].list;
        type = 'Coffee';
        break;
      case 'machine':
        productList = products[1].list;
        type = 'Machine';
        break;
      case 'accessory':
        productList = products[2].list;
        type = 'Accessory';
        break;
    }
  }
</script>

<div class="container">
  <div class="btns">
    <button class="btn" on:click={handleClick} value="coffee"> Coffee </button>
    <button class="btn" on:click={handleClick} value="machine"> Machines </button>
    <button class="btn" on:click={handleClick} value="accessory"> Accessory </button>
  </div>
  <div class="cardList">
    <div class="cards">
      {#each productList as product}
        <ProductCard {product} on:click={() => addToCart(product)} productUrl="/product/{type}/{product.id}" />
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
