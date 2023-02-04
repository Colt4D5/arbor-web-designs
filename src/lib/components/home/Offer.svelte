<script>
  export let params
</script>

<section id="offer">
  <div class="container">
    <h2 id="offer-title"><theme-color>$0</theme-color> Down, <theme-color>{params === 'presale33' ? '$100' : '$150'}</theme-color> Per Month</h2>
    <p>$0 down for a standard 5 page small business website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved. </p>
    <p>You own your domain, content, listing, and profiles.</p>
  </div>
</section>

<style lang="postcss">
  #offer {
    z-index: 2;
    position: relative;
    /* background: linear-gradient(145deg, rgba(var(--primary-rgb), 0.8), rgba(var(--primary-rgb), 0.6)); */
    border-radius: 6rem 0 6rem 0;
    & .container {
      width: min(85%, 750px);
      margin: 0 auto;
      /* padding: 4rem 0; */
      & h2 {
        font-size: clamp(1.75rem, 4vw, 2.5rem);
      }
    }
  }
</style>