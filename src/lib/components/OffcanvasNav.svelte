<script>
  import { page } from '$app/stores';
</script>

<div class="hamburger-overlay"></div>
<div id="offcanvas-nav">
  <nav>
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
