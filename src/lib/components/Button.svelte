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
    padding: 1em 2em;
    background-color: var(--secondary);
    text-transform: uppercase;
    color: #fff;
    border-radius: 0.25em;
    margin-top: 0.5em;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 2rem 0 2rem 0;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 25px, rgba(0, 0, 0, 0.1) 0px 5px 10px;
    font-family: 'Montserrat Alternates', sans-serif;
    text-transform: lowercase;
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