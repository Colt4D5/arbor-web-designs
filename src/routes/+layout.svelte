<script>
	import '@picocss/pico/css/pico.min.css';
	import '$css/vars.postcss';
	import '$css/app.postcss';
	import '$css/utilities.postcss';
	import Header from '$components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<Header />

<main class="container">
	<slot />
</main>

<Footer />
