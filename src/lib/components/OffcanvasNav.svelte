<script>
  import closeIcon from '$assets/svg/close.svg'

  import { page } from '$app/stores';

  import { onMount } from 'svelte';

  const toggleMenu = () => {
    document.querySelector('html').dataset.mobileMenu = document.querySelector('html').dataset.mobileMenu === 'is_open' ? '' : 'is_open';
  }

  onMount(() => {
  document.querySelector('.hamburger-overlay')?.addEventListener('click', e => {
    if (e.target.closest('#hamburger-menu')) return;
    toggleMenu();
  })
});
</script>

<div class="hamburger-overlay"></div>
<div id="offcanvas-nav">
  <nav>
    <ul>
      <li class="nav-item" class:active={$page.url.pathname === '/'}>
        <a href="/" on:click={toggleMenu}>Home</a>
      </li>
      <li class="nav-item" class:active={$page.url.pathname == '/about-arbor'}>
        <a href="/#about-me" on:click={toggleMenu}>About</a>
      </li>
      <li class="nav-item" class:active={$page.url.pathname == '/services'}>
        <a href="/services">services</a>
      </li>
      <li class="nav-item" class:active={$page.url.pathname == '/contact'}>
        <a href="/contact" on:click={toggleMenu}>Contact</a>
      </li>
    </ul>
  </nav>
  <button id="close-btn" on:click={toggleMenu} class="no-styles">
    <img src={ closeIcon } alt="Close button">
  </button>
</div>



<style lang="postcss">
  #offcanvas-nav {
    position: fixed;
    left: 100%;
    top: 0;
    height: 100vh;
    background-color: #eee;
    z-index: 9999;
    padding: 6rem 1rem 1rem;
    transition: transform 0.5s ease;
    transform: translate3d(0, 0, 0);
    width: min(80%, 450px);
    text-align: right;
    & ul {
      text-align: right;
      flex-direction: column;
      margin-left: auto;
      margin-right: 1rem;
      & li {
        padding: 0.5rem 0;
        margin-bottom: 0.5rem;
        & a {
          font-size: 1.75rem;
          padding-right: 1rem;
          font-family: 'Montserrat Alternates', sans-serif;
          color: #444;
        }
        &.active {
          border-right: 2px solid var(--primary);
        }
      }
    }
    & #close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      & img {
        width: 48px;
        height: 48px;
      }
    }
  }
  :global(html[data-mobile-menu="is_open"]) {
    & #offcanvas-nav {
      transform: translate3d(-100%, 0, 0);
    }
    & .hamburger-overlay {
      opacity: 1;
      pointer-events: all;
    }
  }
  .hamburger-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0 0 0 / 0.75);
    z-index: 98;
    transition: all 0.3s ease;

    opacity: 0;
    pointer-events: none;
  }
</style>