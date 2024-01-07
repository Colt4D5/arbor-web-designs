<script>
  import SvelteMarkdown from 'svelte-markdown';
  import source from '$lib/blog-posts/high-performance-website.md?raw';
</script>

<SvelteMarkdown {source} />