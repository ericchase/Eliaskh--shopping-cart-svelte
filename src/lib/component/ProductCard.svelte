<script lang="ts">
  import type { Product } from '$lib/model/product';
  import { cartStore } from '$lib/store/cart-store';

  export let arrayOfProducts: Product[];
  export let numberOfProduct: number = 5;

  function addProductToCart(product: Product) {
    cartStore.update((productList) => {
      productList.push(product);
      return productList;
    });
  }
</script>

<div class="container">
  {#each arrayOfProducts.slice(0, numberOfProduct) as product}
    <div class="card">
      <a href="/product/{product.id}" class="link">
        <div class="info">
          <img src={product.imageSrc} alt={product.name} />
          <div class="name">{product.name}</div>
          <div class="price">${product.Price}</div>
          <p class="description">{product.description}</p>
        </div>
      </a>
      <button class="buy-now" on:click={() => addProductToCart(product)}>
        <div>Buy Now</div>
      </button>
    </div>
  {/each}
</div>

<style lang="scss">
  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 30rem;
    border: 2px solid var(--secondary-color);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    .name {
      color: black;
    }
    img {
      width: 70%;
      height: 70%;
      object-fit: contain;
      padding-top: 1rem;
    }
    .price {
      font-size: 22px;
      font-weight: bold;
      color: var(--secondary-color);
      padding-bottom: 1rem;
    }
    .description {
      position: absolute;
      padding: 10%;
      background-color: white;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      margin: 0;
      border-radius: 0.5rem;
      display: none;
    }
    &:hover {
      .description {
        display: inline;
        opacity: 1;
      }
    }
  }

  .card {
    width: 15%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
  }

  .link {
    color: black;
    &:hover {
      color: black;
    }
  }

  .buy-now {
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
</style>
