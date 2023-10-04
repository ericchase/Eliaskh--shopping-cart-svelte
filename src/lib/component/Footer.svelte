<footer class="footer">
  <div class="footer-link">
    <div class="link">
      <a href="home">Home</a>
    </div>
    <div class="link">
      <a href="store">Store</a>
    </div>
    <div class="link">
      <a href="aboutUs">About Us</a>
    </div>
  </div>
  <div class="link">
    <a href="home">
      <!-- <Icon path={mdiCoffeeToGo} size={3} /> -->
      <div>Coffee</div>
    </a>
  </div>
</footer>

<style>
  .link {
    color: black;
    list-style: none;
    & a {
      font-size: 20px;
      color: black;
      &:hover {
        color: white;
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    box-sizing: border-box;
    background-color: var(--secondary-color);

    min-height: min-content;
    /* align-self: end; */
  }

  .footer-link {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
