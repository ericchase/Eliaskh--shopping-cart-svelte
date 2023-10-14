<script lang="ts">
  import ProductCard from '$lib/component/ProductCard.svelte';
  import productGroupsData from '$lib/data/product.json';
  import type { Product } from '$lib/model/product';

  const productGroups: [string, Product[]][] = Object.entries(productGroupsData);
</script>

<div class="container">
  <div class="big-image">
    <img src="/bg.jpg" alt="" />
    <a href="/store">Shop Now!</a>
  </div>

  <div class="cardList">
    <button class="btn" value="coffee"> Coffee </button>
    <div class="cards">
      <div class="product-card-container">
        {#each productGroups[0][1] as product}
          <button on:click={() => '/product/coffee/{product.id}'}>
            <ProductCard {product} />
          </button>
        {/each}
      </div>
    </div>
    <button class="showMoreBtn">
      <a href="/store">Show More {'>>'}</a>
    </button>
  </div>

  <div class="cardList">
    <button class="btn" value="machine"> Machine </button>
    <div class="cards">
      <div class="product-card-container">
        {#each productGroups[1][1] as product}
          <a href="/product/machine/{product.id}" class="link">
            <ProductCard {product} />
          </a>
        {/each}
      </div>
    </div>
    <button class="showMoreBtn">
      <a href="/store">Show More >></a>
    </button>
  </div>

  <div class="cardList">
    <button class="btn" value="accessory"> Accessory </button>
    <div class="cards">
      <div class="product-card-container">
        {#each productGroups[2][1] as product}
          <a href="/product/accessory/{product.id}" class="link">
            <ProductCard {product} />
          </a>
        {/each}
      </div>
    </div>
    <button class="showMoreBtn">
      <a href="/store">Show More {'>>'}</a>
    </button>
  </div>
</div>

<style lang="scss">
  .container {
    margin: 0;
    padding: 0;

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

  .cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0;
    box-sizing: border-box;
    gap: 1rem;
  }

  .showMoreBtn {
    font-size: 24px;
    padding: 1rem 0;
    align-self: center;
    width: 30%;
    margin-bottom: 1rem;
    background-color: var(--primary-color);
    &:hover {
      border: 2px solid var(--secondary-color);
    }
    a {
      color: black;
      &:hover {
        color: black;
      }
    }
  }

  .cardList {
    display: flex;
    flex-direction: column;
  }

  .product-card-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .link {
    color: black;
    &:hover {
      color: black;
    }
  }
</style>
