<script lang="ts">
  import ProductCard from '$lib/component/ProductCard.svelte';
  import ProductGroups from '$lib/data/product.json';
  import { addToCart } from '$lib/store/cart-store';
</script>

<div class="container">
  <div class="big-image">
    <img src="/bg.jpg" alt="" />
    <a href="/store">Shop Now!</a>
  </div>

  {#each ProductGroups as { type, list }}
    <div class="cardList">
      <button class="button" value={type}>{type}</button>
      <div class="cards">
        {#each list as product}
          <ProductCard {product} on:click={() => addToCart(product)} productUrl="/product/{type}/{product.id}" />
        {/each}
      </div>
      <button class="showMoreBtn button">
        <a href="/store">Show More {'>>'}</a>
      </button>
    </div>
  {/each}
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    .big-image {
      img {
        position: relative;
        width: 100%;
        height: 70vh;
        object-fit: cover;
      }
      a {
        border: 2px solid white;
        padding: 0.2rem 0.3rem;
        font-size: 24px;
        color: white;
        position: absolute;
        bottom: 25%;
        left: 3%;
        &:hover {
          color: var(--primary-color);
          border: 3px solid var(--primary-color);
          font-weight: bold;
        }
      }
    }
  }

  .button {
    align-self: start;
    font-size: 24px;
    box-sizing: border-box;
    margin: 1rem 7.5rem;
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    &:hover {
      border: 2px solid var(--secondary-color);
    }
  }

  .cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0;
    box-sizing: border-box;
    gap: 1rem;
  }

  .cardList {
    display: flex;
    flex-direction: column;
    div {
      width: 20%;
    }
  }
  .showMoreBtn {
    align-self: center;
    width: 30%;
    background-color: var(--primary-color);
    a {
      color: black;
      &:hover {
        color: black;
      }
    }
  }
</style>
