<script>
	// import { browser } from '$app/environment';
  import SvelteMarkdown from 'svelte-markdown'
	import Headerimage from "$components/Headerimage.svelte";
	import BlogSkeleton from '$components/BlogSkeleton.svelte';

	export let data

	const { posts } = data

	const formattedPosts = posts.map(post => {
		return {
			...post,
			postContent: teasePost(post.postContent, 300)
		}
	})

  function teasePost(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
	// const posts = [
	// 	{
	// 		uid: 1,
	// 		slug: 'high-performance-website'
	// 	},
	// 	{
	// 		uid: 2,
	// 		slug: 'slow-equals-low-traffic'
	// 	},
	// ]

	// import {page} from '$app/stores';
	// let post;

	// let blogPostName = null;
	// let hasFetchedPost = false

	// if (browser) {
		// fetchPost();
	// }

	// async function fetchPost() {
	// 	blogPostName =  $page.url.searchParams.get('post') || null;
		
	// 	if (!blogPostName) {
	// 		blogPostName = 'BlogLanding';
	// 	}

	// 	console.log(blogPostName)

	// 	try {
	// 		await import(/* @vite-ignore */`./posts/${blogPostName}.svelte`)
	// 			.then(res => post = res.default)
	// 	} catch (error) {
	// 		post = null
	// 	}

	// 	hasFetchedPost = true;
	// }
</script>

<svelte:head>
  <title>Arbor Web Designs | Contact Us | Moreno Valley, CA</title>
</svelte:head>

<Headerimage header="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/contact-header_bwyrny.webp" alignment="left 45% center" overlay="background-color: rgb(0 0 0 / 0.65); width: 100%; height: 100%;" />

<section id="article">
	<div class="container">

			<h1><theme-color>Arbor</theme-color> Blog</h1>

			{#each formattedPosts as post, i (post.uid) }
				<div>
					<SvelteMarkdown source={ post.postContent } />
					<a href={`/blog/${post.slug}`} role="button">Read More</a>
				</div>

				{#if i < formattedPosts.length - 1 }
					<hr>
				{/if}
			{/each}
			
			<!-- {#if hasFetchedPost && post}
				<svelte:component this={post} />
				{#if blogPostName !== 'BlogLanding' }
					<a href="#" on:click|preventDefault={() => window.location = (`/blog`)} role="button">Back</a>
				{/if}
			{:else if hasFetchedPost && !post}
				<div>No post found...</div>
			{:else if !hasFetchedPost}
				<BlogSkeleton />
			{:else}
				<svelte:component this={post} />
			{/if} -->

	</div>
</section>

<style lang="postcss">
  :global(h2, h3) {
    margin-top: 0;
    text-transform: lowercase;
  }
  :global(h2:has(+ p)) {
    margin-bottom: 0;
  }
  :global(h3:has(+ p)) {
    margin-bottom: 0;
  }
</style>