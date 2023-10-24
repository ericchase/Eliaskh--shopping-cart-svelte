<script lang="ts">
  import ProductCard from '$lib/component/ProductCard.svelte';
  import products from '$lib/data/product.json';
  import type { Product } from '$lib/model/product';

  let productList: Product[] = products['coffee'];

  function handleClick(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    switch (e.currentTarget.value) {
      case 'coffee':
        productList = products['coffee'];
        break;
      case 'machine':
        productList = products['machine'];
        break;
      case 'accessory':
        productList = products['accessory'];
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
      <ProductCard {productList} displayLimit={10} />
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
        &:hover {
          border: 2px solid var(--secondary-color);
        }
      }
    }
  }
</style>
