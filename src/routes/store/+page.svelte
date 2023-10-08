<script lang="ts">
  import ProductCard from '$lib/component/ProductCard.svelte';
  import products from '$lib/data/product.json';

  let typeOfProduct: string = 'coffee';
  function handleClink(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    typeOfProduct = e.currentTarget.value;
    console.log(typeOfProduct);
  }
</script>

<div class="container">
  <div class="btns">
    <button class="btn" on:click={handleClink} value="coffee"> Coffee </button>
    <button class="btn" on:click={handleClink} value="machine"> Machines </button>
    <button class="btn" on:click={handleClink} value="accessory"> Accessory </button>
  </div>
  <div class="cardList">
    <div class="cards">
      <ProductCard arrayOfProducts={products[typeOfProduct]} numberOfProduct={10} />
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
