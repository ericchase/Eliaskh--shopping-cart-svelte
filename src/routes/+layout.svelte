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
    width: 100vw;
    display: grid;
    grid-template-rows: 100px 6fr 150px;
    margin: 0;
    padding: 0;
  }
  .item {
    display: flex;
    justify-content: center;
  }
</style>
