<script>
  import SvelteMarkdown from 'svelte-markdown'
  import Headerimage from '$components/Headerimage.svelte'
  export let data
</script>

<svelte:head>
  <title>Arbor Web Designs | Contact Us | Moreno Valley, CA</title>
</svelte:head>

<Headerimage header="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/contact-header_bwyrny.webp" alignment="left 45% center" overlay="background-color: rgb(0 0 0 / 0.65); width: 100%; height: 100%;" />

<section id="article">
	<div class="container">

    <h1><theme-color>Arbor</theme-color> Blog</h1>

    <SvelteMarkdown source={ data.PostContent } />

    <a href="/blog" role="button">Back</a>

	</div>
</section>

