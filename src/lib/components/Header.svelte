<script>
	import Hamburger from '$components/Hamburger.svelte';
  import logo from '$assets/svg/logo.svg'

  import { page } from '$app/stores'

  // import { onMount } from 'svelte'

  // $: isLight = true

  // onMount(() => {
  //   isLight = document.querySelector('html').dataset.theme === 'light'
  // });
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
        <li class="nav-item" class:active={$page.url.pathname == '/services'}>
          <a href="/services">Services</a>
        </li>
        <li class="nav-item" class:active={$page.url.pathname == '/contact'}>
          <a href="/contact">Contact</a>
        </li>
        <!-- <li class="toggle-li">
          <input id="toggle" class="toggle" type="checkbox" bind:checked={isLight} >
        </li> -->
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
            /* &.toggle-li {
              margin-left: 2rem;
              & .toggle {
                --size: 1.5rem;
                
                appearance: none;
                outline: none;
                cursor: pointer;
                transform: translate3d(5px, 2px, 0);
                
                width: var(--size);
                height: var(--size);
                box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
                border-radius: 999px;
                color: #b8b8ff;
                background-color: transparent;
                border: none;
                z-index: 1;
                
                transition: all 500ms;
                &:hover {
                  color: #8383ff;
                }
                &:checked {
                  --ray-size: calc(var(--size) * -0.4);
                  --offset-orthogonal: calc(var(--size) * 0.65);
                  --offset-diagonal: calc(var(--size) * 0.45);

                  transform: scale(0.75) translate3d(5px, 2px, 0) rotate(180deg);
                  color: hsl(40, 100%, 50%);
                  box-shadow: 
                    inset 0 0 0 var(--size),
                    calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
                    var(--offset-orthogonal) 0 0 var(--ray-size),
                    0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
                    0 var(--offset-orthogonal) 0 var(--ray-size),
                    calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
                    var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
                    calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
                    var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size)
                  ;
                  &:hover {
                    color: hsl(40, 100%, 70%);
                  }
                }
              }
            } */
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
  /* :global(html[data-theme="dark"]) {
    & header {
      & nav {
        & #logo-container {
          & img {
            filter: invert(1);
          }
        }
      }
    }
  } */
</style>
