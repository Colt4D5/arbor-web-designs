<script>
	import '@picocss/pico/css/pico.min.css'
	import '$css/fonts.postcss'
	import '$css/app.postcss'
	import '$css/vars.postcss'
	import '$css/utilities.postcss'
	import Header from '$components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import OffcanvasNav from '$lib/components/OffcanvasNav.svelte'
	import ToTopBtn from '../lib/components/ToTopBtn.svelte'
</script>

<Header />
<main id="main">
	<slot />
</main>
<Footer />
<OffcanvasNav />
<ToTopBtn />
