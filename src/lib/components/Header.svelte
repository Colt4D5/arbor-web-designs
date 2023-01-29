<script>
	import Hamburger from '$components/Hamburger.svelte';
  import logo from '$assets/svg/logo.svg'

  import { navItems } from '$utils/NavItems.js'

  import { page } from '$app/stores'

  import { onMount } from 'svelte'

  let isSticky = false

  onMount(() => {
    isSticky = window.scrollY > 100
    window.addEventListener('scroll', e => {
      isSticky = window.scrollY > 100
    })
  });
</script>


<header class:isSticky={isSticky}>
  <div class="container">
    <nav>
      <ul id="logo-container"><li><a href="/"><img src={ logo } alt="Arbor Web Designs | Moreno Valley, CA" /></a></li></ul>
      <ul id="nav-container" class="show-for-large">
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
      <Hamburger />
    </nav>
  </div>
</header>

<style lang="postcss">
  header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    margin: 0 auto;
    & .container {
      position: relative;
      & nav {
        & #logo-container {
          & img {
            width: clamp(125px, 30vw, 250px);
          }
        }
        & #nav-container {
          & li {
            & a {
              color: #fff;
              position: relative;
              &:hover {
                color: var(--primary);
              }
              &::before {
                content: '';
                position: absolute;
                top: 100%;
                left: auto;
                right: 0;
                width: 0;
                height: 3px;
                background-color: var(--primary);
                transition: width 0.2s ease-out;
              }
            }
            &.active {
              & a {
                &::before {
                  width: 100%;
                  left: 0;
                  right: auto;
                }
              }
            }
          }
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
