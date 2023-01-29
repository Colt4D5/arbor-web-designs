<script>
  const toggleMobileMenu = () => {
    document.querySelector('html').dataset.mobileMenu = document.querySelector('html').dataset.mobileMenu === 'is_open' ? '' : 'is_open'
  }
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<ul id="hamburger" class="hide-for-large">
  <li>
    <button on:click={toggleMobileMenu} role="button">
      <div class="bar top"></div>
      <div class="bar mid"></div>
      <div class="bar bot"></div>
    </button>
  </li>
</ul>

<style lang="postcss">
  #hamburger {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    z-index: 101;
    & button {
      width: 30px;
      height: 30px;
      display: block;
      position: relative;
      background-color: transparent;
      border: none;
      & .bar {
        position: absolute;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 8px;
        background-color: #000;
        transition: all 0.3s ease;
        pointer-events: none;
        &.top {
          top: 4px;
          transform-origin: top center;
        }
        &.mid {
          top: 50%;
          transform: translateY(-50%);
        }
        &.bot {
          bottom: 4px;
          transform-origin: bottom center;
        }
      }
    }
    &:hover {
      & button {
        & .bar {
          background-color: var(--primary);
        }
      }
    }
  }
  /* :global(body.mobile-hamburger-is-open #hamburger) {
    width: 26px;
    & .bar {
      background-color: $primary-lgt;
      &.top {
        top: 50%;
        rotate: 45deg;
        transform: translateY(-50%);
      }
      &.mid {
        opacity: 0;
      }
      &.bot {
        rotate: -45deg;
        bottom: 50%;
        transform: translateY(50%);
      }
    }
  } */
</style>
