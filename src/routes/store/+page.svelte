<script lang="ts">
  import products from '$lib/data/product.json';

  let typeOfProduct: string = 'coffee';
  function handleClink(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    typeOfProduct = e.currentTarget.value;
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
      {products[typeOfProduct][0].name}
      <!-- {CreateSmallCard(products[typeOfProduct], 10)} -->
    </div>
  </div>
</div>
