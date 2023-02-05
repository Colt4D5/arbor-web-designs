<script>
	import Headerimage from "$components/Headerimage.svelte"
	import bgImage from '$assets/img/contact-header.webp'
	import ContactForm from "$components/contact/ContactForm.svelte";
</script>

<svelte:head>
  <title>Arbor Web Designs | Contact Us | Moreno Valley, CA</title>
</svelte:head>

<Headerimage header={ bgImage } alignment="left 45% center" overlay="background-color: rgb(0 0 0 / 0.65); width: 100%; height: 100%;" />

<div class="container">
	<h1>Contact Us</h1>
	<ContactForm />
</div>

<style lang="postcss">
	.container {
		max-width: 800px;
		margin-inline: auto;
	}
</style>