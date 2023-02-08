<script>
	import Headerimage from "$components/Headerimage.svelte"
	// import bgImage from '$assets/img/contact-header.webp'
	import ContactForm from "$components/contact/ContactForm.svelte";
</script>

<svelte:head>
  <title>Arbor Web Designs | Contact Us | Moreno Valley, CA</title>
</svelte:head>

<Headerimage header="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/contact-header_bwyrny.webp" alignment="left 45% center" overlay="background-color: rgb(0 0 0 / 0.65); width: 100%; height: 100%;" />

<div class="container">
	<h1>contact us</h1>
	<p>At <theme-color>Arbor Web Design</theme-color>, we understand the importance of having a strong online presence and are committed to delivering custom, high-quality solutions to meet your specific needs.</p>

	<p>So don't wait, contact us today to discuss your website project and see how we can help take your online presence to the next level. Our friendly and knowledgeable team is always ready to answer any questions and guide you through the process. Just fill out the form below and let's start your journey to the web!</p>
	<hr />
	<ContactForm />
</div>

<style lang="postcss">
	.container {
		max-width: 800px;
		margin-inline: auto;
	}
</style>