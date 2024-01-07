<script>
  import SvelteMarkdown from 'svelte-markdown'
	import Headerimage from "$components/Headerimage.svelte";

	export let data

	const { posts } = data
</script>

<svelte:head>
  <title>Arbor Web Designs | Contact Us | Moreno Valley, CA</title>
</svelte:head>

<Headerimage header="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/contact-header_bwyrny.webp" alignment="left 45% center" overlay="background-color: rgb(0 0 0 / 0.65); width: 100%; height: 100%;" />

<section id="blog-feed">
	<div class="container">

			<h1><theme-color>Arbor</theme-color> Blog</h1>

			{#each posts as post, i (post.id) }
				<div class="post-teaser">
					<h2>{ post.title.toLowerCase() }</h2>
					<SvelteMarkdown source={ post.teaser } />
					<a href={`/blog/${post.slug}`} role="button">Read More</a>
				</div>

				{#if i < posts.length - 1 }
					<hr>
				{/if}
			{/each}

	</div>
</section>

<style lang="postcss">
	#blog-feed {
		& .post-teaser {
			& h2 {
				margin-bottom: 1rem;
			}
		}
		& hr {
			margin-block: 2rem;
		}
	}
</style>
