<script>
	import Pricing from '$components/home/Pricing.svelte';
	import About from '$components/home/About.svelte';
	import Hero from "$components/home/Hero.svelte";
	import Intro from "$components/home/Intro.svelte";
	import Offer from "$components/home/Offer.svelte";
	import Performance from "$components/home/Performance.svelte"
	import Spacer from '$components/Spacer.svelte';

  export let data
</script>

<svelte:head>
  <title>Arbor Web Designs | Moreno Valley, CA</title>
</svelte:head>

<Hero />
<Intro />
<Spacer />
<Performance />
<Offer params={data.params} />
<Spacer />
<About />
<Pricing />
