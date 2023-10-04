<script lang="ts">
  import '$lib/index.css';

  import NavBar from '$lib/component/NavBar.svelte';
  import Footer from '$lib/component/Footer.svelte';
</script>

<div class="container">
  <NavBar />
  <div class="item">
    <slot />
  </div>
  <Footer />
</div>

<style lang="scss">
  .container {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 100px 6fr 100px;
    .item {
      display: grid;
      justify-content: center;
      align-items: center;
    }
  }
</style>
