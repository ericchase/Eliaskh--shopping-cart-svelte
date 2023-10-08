<script lang="ts">
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import BsPlus from 'svelte-icons-pack/bs/BsPlus';
  import BsDash from 'svelte-icons-pack/bs/BsDash';
  import BsX from 'svelte-icons-pack/bs/BsX';

  import type { Product } from '$lib/model/product';

  export let items: Product[];
  let amount: number = 1;
</script>

{#each items as item}
  <div class="card">
    <div class="img">
      <img src={item.imageSrc} alt="" />
    </div>
    <div class="info">
      <div class="name">{item.name}</div>
      <div class="shopItem">
        <div class="btnGroup">
          <button on:click={() => {}}>
            <Icon src={BsPlus} size={25} />
          </button>
          <div class="amount">{amount}</div>
          <button on:click={() => {}}>
            <Icon src={BsDash} size={25} />
          </button>
        </div>
        <div class="price">
          ${item.Price * amount}
        </div>
        <div class="remove">
          <button>
            Remove
            <Icon src={BsX} size={25} />
          </button>
        </div>
      </div>
    </div>
  </div>
{/each}

<style lang="scss">
  .card {
    display: flex;
    gap: 5rem;
    height: 20rem;
    border: 3px solid var(--secondary-color);
    border-radius: 0.5rem;
    padding: 1rem;
    .img {
      img {
        height: 90%;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    .name {
      font-weight: 600;
      font-size: 20px;
    }
  }

  .shopItem {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    .btnGroup {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
    button {
      margin: 0;
      padding: 0.2rem 0.5rem;
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        border: 1px solid var(--secondary-color);
      }
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline: none;
      }
    }
  }
</style>
