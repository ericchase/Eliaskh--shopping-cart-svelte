<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  import ProductGroups from '$lib/data/product.json';
  import { addToCart } from '$lib/store/cart-store';

  const product = ProductGroups.find(({ type }) => type === data.type)?.list?.find(({ id }) => id === data.id);
</script>

{#if product}
  <div class="container">
    <div class="img"><img src={product.imageSrc} alt={product.name} /></div>
    <div class="info">
      <div class="title">{product.name}</div>
      <div class="description">
        {product.description}
      </div>
      <div class="buyItem">
        <div class="price">
          ${product.price}
        </div>
        <button on:click={() => addToCart(product)}> Add to cart </button>
      </div>
    </div>
  </div>
{:else}
  Product Not Found
{/if}

<style lang="scss">
  .container {
    height: 20rem;
    width: 70%;
    box-sizing: border-box;
    padding: 1rem;
    margin: 1rem;
    border: 3px solid var(--secondary-color);
    border-radius: 1rem;

    display: flex;
    justify-content: center;
    gap: 3rem;

    img {
      height: 18rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
    }

    .title {
      color: var(--secondary-color);
      font-size: 60px;
      font-weight: 600;
    }

    .price {
      color: var(--secondary-color);
      font-weight: 600;
      font-size: 30px;
    }
    .buyItem {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4rem;
    }
    button {
      appearance: none;
      background-color: var(--primary-color);
      box-sizing: border-box;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      text-align: center;
      user-select: none;
      width: 100%;

      border-radius: 8px;
      border: 2px solid var(--primary-color);

      padding: 0.5rem 1rem;
      &:hover {
        border-color: var(--secondary-color);
        color: black;
      }
    }
  }
</style>
