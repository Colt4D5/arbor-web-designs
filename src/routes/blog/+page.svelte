<script>
	import { browser } from '$app/environment';
	import Headerimage from "$components/Headerimage.svelte";
	import BlogSkeleton from '$components/BlogSkeleton.svelte';

	import {page} from '$app/stores';
	let post;

	let blogPostName = null;
	let hasFetchedPost = false

	if (browser) {
		fetchPost();
	}

	async function fetchPost() {
		blogPostName =  $page.url.searchParams.get('post') || null;

		if (!blogPostName) {
			blogPostName = 'BlogLanding';
		}

		try {
			await import(/* @vite-ignore */`./posts/${blogPostName}.svelte`)
				.then(res => post = res.default)
		} catch (error) {
			post = null
		}

		hasFetchedPost = true;
	}
</script>

<svelte:head>
  <title>Arbor Web Designs | Contact Us | Moreno Valley, CA</title>
</svelte:head>

<Headerimage header="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/contact-header_bwyrny.webp" alignment="left 45% center" overlay="background-color: rgb(0 0 0 / 0.65); width: 100%; height: 100%;" />

<section id="article">
	<div class="container">

		<div class="top">
			<div class="left">
				<h1><theme-color>Arbor</theme-color> Blog</h1>

				
				{#if hasFetchedPost && post}
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
				{/if}
				
			<div class="right"></div>
		</div>
	
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
	section#article {
		& .top {
			display: flex;
			flex-direction: column;
			@media (width >= 40em) {
				flex-direction: row;
			}
			& .left {
				flex: 2;
			}
			& .right {
				flex: 1;
			}
		}
	}
</style>