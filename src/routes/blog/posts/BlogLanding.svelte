<script>
  import SvelteMarkdown from 'svelte-markdown';
  import post1 from '$blogPosts/high-performance-website.md?raw';
  import post2 from '$blogPosts/slow-equals-low-traffic.md?raw';

  const showPosts = [ 
    {
      uid: 1,
      link: "high-performance-website",
      data: post1
    },
    {
      uid: 2,
      link: "slow-equals-low-traffic",
      data: post2
    },
  ];
  const posts = [];

  showPosts.forEach(post => posts.push({
    uid: post.uid,
    link: post.link,
    data: teasePost(post.data, 300)
  }));

  function teasePost(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
</script>

{#each posts as post, i (post.uid) }
  <div class="card">
    <SvelteMarkdown source={post.data} />
    <a href="#" on:click|preventDefault={() => window.location = (`/blog?post=${post.link}`)} role="button">Read More</a>
  </div>

  {#if i < posts.length - 1 }
    <hr style="margin-block: 2rem;">
  {/if}
  
{/each}

<!-- <h2>This is the blog landing page</h2> -->

<style lang="postcss">
  :global(h2, h3, h4) {
    text-wrap: pretty;
  }
</style>
