<script lang="ts">
  import type { Product } from '$lib/model/product';

  export let product: Product;
  export let productUrl: string;
</script>

<div class="card">
  <a href={productUrl} class="info">
    <img src={product.imageSrc} alt={product.name} />
    <div class="name">{product.name}</div>
    <div class="price">${product.price}</div>
    <p class="description">{product.description}</p>
  </a>
  <!-- the click event will be passed up to the parent -->
  <button on:click class="button buy-now">
    <div>Buy Now</div>
  </button>
</div>

<style lang="scss">
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 30rem;
    border: 2px solid var(--secondary-color);
    border-radius: 0.5rem;
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
        color: black;
      }
    }
  }

  .card {
    width: 15%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
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
