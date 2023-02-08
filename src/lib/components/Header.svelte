<script>
	import Hamburger from '$components/Hamburger.svelte';
  import logo from '$assets/svg/logo.svg'

  import { page } from '$app/stores'
</script>


<header id="header">
  <div class="container">
    <nav>
      <ul id="logo-container"><li><a href="/"><img src={ logo } alt="Arbor Web Designs | Moreno Valley, CA" /></a></li></ul>
      <ul id="nav-container" class="show-for-large">
        <li class="nav-item" class:active={$page.url.pathname === '/'}>
          <a href="/">Home</a>
        </li>
        <li class="nav-item" class:active={$page.url.pathname === '/about-arbor'}>
          <a href="/about-arbor">About</a>
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
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    margin: 0 auto;
    background-color: rgb(0 0 0 / 0);
    z-index: 4;
    transition: all 0.5s ease;
    & .container {
      position: relative;
      & nav {
        & #logo-container {
          & img {
            filter: invert(1);
            width: clamp(150px, 30vw, 250px);
            transition: all 0.5s ease;
          }
        }
        & #nav-container {
          & li {
            & a {
              color: #fff;
              position: relative;
              margin-left: 1.5rem;
              font-family: 'Montserrat Alternates', sans-serif;
              &:hover {
                color: var(--secondary);
              }
              &::before {
                content: '';
                position: absolute;
                top: 100%;
                left: auto;
                right: 0;
                width: 0;
                height: 3px;
                background-color: var(--secondary);
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
    /* &.isSticky {
      background-color: rgba(73, 74, 31, 0.8);
      transition: transform 0.5s ease;
      & .container {
        & nav {
          & #logo-container {
            & img {
              width: 125px;
            }
          }
          & #nav-container {
            padding: 0.5rem;
          }
        }
      }
    } */
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
