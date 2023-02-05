<script>
  let y
</script>

<a class:isScrolled={y > 800} class="button to-top-btn" href="#header">Top</a>

<svelte:window bind:scrollY={y}/>

<style lang="postcss">
  .to-top-btn {
    position: fixed; 
    right: 1rem;
    bottom: 1rem;
    background-color: rgba(var(--primary-rgb), 0.5);
    color: #fff;
    padding: 0.75em 1em 0.5em;
    border-radius: 1.5em 0 1.5em 0;
    text-decoration: none;
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease,
    background-color 0.3s ease;
    &:hover {
      background-color: rgba(var(--primary-rgb), 0.85);
    }
    &::before {
      content: url(../assets/svg/chevron-up.svg);
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      filter: invert(1);
    }
    &.isScrolled {
      opacity: 1;
      pointer-events: all;
    }
  }
</style>