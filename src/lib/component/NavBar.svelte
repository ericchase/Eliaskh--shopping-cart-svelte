<script lang="ts">
  let item = 0;
</script>

<nav class="navBar">
  <div class="link">
    <a href="/">
      <!-- <Icon path={mdiCoffeeToGo} size={2} /> -->
      <div>Coffee</div>
    </a>
  </div>
  <div class="links">
    <div class="link">
      <a href="/">Home</a>
    </div>
    <div class="link">
      <a href="/store">Store</a>
    </div>
    <div class="link">
      <a href="/aboutUs">About Us</a>
    </div>
  </div>
  <div class="link">
    <a href="/cart">
      <div class="item">{item}</div>
      <!-- <Icon path={mdiCartOutline} size={2} /> -->
      <div>Cart</div>
    </a>
  </div>
</nav>

<style>
  .logo {
    width: 8rem;
    height: auto;
  }

  .link {
    color: black;
    list-style: none;
    & a {
      color: black;
      &:hover {
        color: white;
      }
    }
  }

  .navBar {
    background-color: #ddb892;
    width: 100%;
    padding: 0.3rem 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
  }

  .links {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }

  .item {
    color: white;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--secondary-color);
    text-align: center;
    width: 20px;
    font-size: 14px;
    margin: 0 auto;
  }
</style>
