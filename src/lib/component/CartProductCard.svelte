<script lang="ts">
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import BsDash from 'svelte-icons-pack/bs/BsDash';
  import BsPlus from 'svelte-icons-pack/bs/BsPlus';
  import BsX from 'svelte-icons-pack/bs/BsX';

  import type { Product } from '$lib/model/product';
  import {
    calculateProductTotalCost,
    cartProductStore,
    decrementProductCount,
    getProductCount,
    incrementProductCount,
    removeFromCart
  } from '$lib/store/cart-store';

  export let product: Product;
</script>

<div class="card">
  <img src={product.imageSrc} alt="" />
  <div class="info">
    <div class="name">{product.name}</div>
    <div class="shop-product">
      <!-- values update automatically when accessing stores with the $ -->
      <!-- but, functions that access stores internally do NOT update automatically -->
      {#key $cartProductStore}
        <!-- using the {#key} logic block allows us to update a part of the component based on some value -->
        <div class="btnGroup">
          <button on:click={() => decrementProductCount(product)}>
            <Icon src={BsDash} size="25px" />
          </button>
          <div class="amount">{getProductCount(product)}</div>
          <button on:click={() => incrementProductCount(product)}>
            <Icon src={BsPlus} size="25px" />
          </button>
        </div>
        <div class="price">{calculateProductTotalCost(product).toFixed(2)}</div>
        <div class="remove">
          <button on:click={() => removeFromCart(product)}>
            Remove
            <Icon src={BsX} size="25px" />
          </button>
        </div>
      {/key}
    </div>
  </div>
</div>

<style lang="scss">
  img {
    max-height: 20rem;
    min-width: 10rem;
  }

  .card {
    display: flex;
    gap: 5rem;
    height: 20rem;
    border: 3px solid var(--secondary-color);
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    .name {
      font-weight: 600;
      font-size: 20px;
    }
  }

  .shop-product {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .btnGroup {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
    button {
      margin: 0;
      padding: 0.2rem 0.5rem;
      background-color: var(--primary-color);
      border: 2px solid var(--primary-color);
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        border: 2px solid var(--secondary-color);
      }
    }
  }
</style>
