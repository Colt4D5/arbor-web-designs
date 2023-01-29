<script>
  const toggleDarkMode = () => {
    document.querySelector('html').dataset.theme = document.querySelector('html').dataset.theme === 'dark' ? 'light' : 'dark'
  }
</script>

<footer class="container">
  <button on:click={toggleDarkMode} style="display: inline;width: auto;">Toggle Mode</button>
</footer>

<style lang="postcss">
  footer {
    padding: 12rem 0;
  }
</style>
