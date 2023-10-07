<script>
  import ProductCard from '$lib/component/ProductCard.svelte';
  import products from '$lib/data/product.json';

  function handleClink(e) {}
</script>

<div class="container">
  <div class="big-image">
    <img src="/bg.jpg" alt="" />
    <a href="/store">Shop Now!</a>
  </div>

  <div class="cardList">
    <button class="btn" on:click={handleClink} value="coffee"> Coffee </button>
    <div class="cards">
      <ProductCard arrayOfProducts={products.coffee} numberOfProduct={5} />
    </div>

    <button class="showMoreBtn">
      <a href="/store">Show More {'>>'}</a>
    </button>
  </div>

  <div class="cardList">
    <button class="btn" on:click={handleClink} value="machine"> Machine </button>
    <div class="cards">
      <ProductCard arrayOfProducts={products.machine} numberOfProduct={5} />
    </div>

    <button class="showMoreBtn">
      <a href="/store">Show More >></a>
    </button>
  </div>

  <div class="cardList">
    <button class="btn" on:click={handleClink} value="accessory"> Accessory </button>
    <div class="cards">
      <ProductCard arrayOfProducts={products.accessory} numberOfProduct={5} />
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
</style>
