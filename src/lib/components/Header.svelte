<script>
  import logo from '$assets/svg/logo.svg'

import { page } from '$app/stores'

import { onMount } from 'svelte'

let isScrolled = false

onMount(() => {
  isScrolled = window.scrollY > 100
  document.querySelector('#hamburger')?.addEventListener('click', e => {
    document.body.classList.toggle('mobile-hamburger-is-open');
  })
  window.addEventListener('scroll', e => {
    isScrolled = window.scrollY > 100
  })
});
</script>


<header>
  <div class="container">
    <nav>
      <ul id="logo-container"><li><a href="/"><img src={ logo } alt="Arbor Web Designs | Moreno Valley, CA" /></a></li></ul>
      <ul>
        <li class="nav-item" class:active={$page.url.pathname === '/' && $page.url.hash !== "#about-me"}>
          <a href="/">Home</a>
        </li>
        <li class="nav-item" class:active={$page.url.hash == '#about-me'}>
          <a href="/#about-me">About</a>
        </li>
        <li class="nav-item" class:active={$page.url.pathname == '/contact'}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style lang="postcss">
  header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    margin: 0 auto;
    & nav {
      & #logo-container {
        & img {
          width: clamp(125px, 30vw, 250px);
        }
      }
    }
  }
  :global(html[data-theme="dark"]) {
    & header {
      & nav {
        & #logo-container {
          & img {
            filter: invert(1);
          }
        }
      }
    }
  }
</style>
