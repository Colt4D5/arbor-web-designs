<script>
  export let href
  export let classes = ''
</script>

<a class={ classes === '' ? 'button' : `button ${classes}` } href={ href } role="button">
  <slot />
</a>

<style lang="postcss">
  a.button {
    display: inline-block;
    padding: 1.25em 2em;
    background-color: var(--secondary);
    text-transform: uppercase;
    color: #fff;
    border-radius: 0.25em;
    margin-top: 0.5em;
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 2rem 0 2rem 0;
    border: none;
    font-family: sans-serif;
    transition: color 0.3s ease,
                background 0.3s ease,
                border 0.3s ease;
    &:hover {
      /* background: var(--secondary-hover); */
      background: var(--secondary-hover);
    }
    &.secondary {
      background-color: #fff;
      color: var(--secondary);
      border: 3px solid var(--secondary);
      &:hover {
        background-color: var(--secondary);
        color: #fff;
      }
    }
  }
</style>