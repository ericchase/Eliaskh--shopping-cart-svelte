<script lang="ts">
  import type { Product } from '$lib/model/product';

  export let arrayOfProducts: Product[];
  export let numberOfProduct: number = 5;
</script>

<div class="container">
  {#each arrayOfProducts.slice(0, numberOfProduct) as item}
    <div class="card">
      <a href="/product/{item.id}" class="link">
        <div class="info">
          <img src={item.imageSrc} alt={item.name} />
          <div class="name">{item.name}</div>
          <div class="price">${item.Price}</div>
          <p class="description">{item.description}</p>
        </div>
      </a>
      <div class="btnParent">
        <div>Buy Now</div>
      </div>
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

  .btnParent {
    display: flex;
    justify-content: space-around;
    width: 100%;
    & > div {
      display: flex;
      justify-content: space-around;
      width: inherit;
      background-color: var(--primary-color);
      font-size: 1rem;
      font-weight: 600;
      padding: 0.6em 1.2em;
      border-radius: 8px;
      a {
        color: black;
        &:hover {
          color: black;
        }
      }
      &:hover {
        border: 2px solid var(--secondary-color);
        color: black;
      }
      button {
        padding: 0;
        margin: 0;
        background: none;
        &:hover {
          border: none;
        }
        &:active {
          border: none;
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
</style>
