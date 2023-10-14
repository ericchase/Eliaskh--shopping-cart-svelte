<script lang="ts">
  import type { Product } from '$lib/model/product';
  import { cartStore } from '$lib/store/cart-store';
  import type { PageData } from './$types';

  export let data: PageData;

  import products from '$lib/data/product.json';
  //@ts-ignore
  const productList: Product[] = products[data.type]; // ignore error for now
  const product = productList.find((product) => product.id === data.id);

  function addProductToCart(product: Product) {
    cartStore.update((productList) => {
      productList.push(product);
      return productList;
    });
  }
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
          ${product.Price}
        </div>
        <button on:click={() => addProductToCart(product)}> Add to cart </button>
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
      &:hover {
        border-color: var(--secondary-color);
        color: black;
      }
    }
  }
</style>
