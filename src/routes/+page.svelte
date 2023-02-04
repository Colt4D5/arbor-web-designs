<script>
	import Pricing from './../lib/components/Pricing.svelte';
	import About from './../lib/components/home/About.svelte';
	import Hero from "$components/home/Hero.svelte";
	import Intro from "$components/home/Intro.svelte";
	import Offer from "../lib/components/home/Offer.svelte";
	import Performance from "../lib/components/home/Performance.svelte"

  export let data
</script>

<svelte:head>
  <title>Arbor Web Designs | Moreno Valley, CA</title>
</svelte:head>

<Hero />
<Intro />
<Performance />
<Offer params={data.params} />
<About />
<Pricing />
