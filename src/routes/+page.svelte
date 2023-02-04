<script>
	import About from './../lib/components/home/About.svelte';
	import Hero from "$components/home/Hero.svelte";
	import Intro from "$components/home/Intro.svelte";
	import Offer from "../lib/components/home/Offer.svelte";
	import Results from "../lib/components/home/Results.svelte"

  export let data
</script>

<svelte:head>
  <title>Arbor Web Designs | Moreno Valley, CA</title>
</svelte:head>

<Hero />
<Intro />
<Results />
<Offer params={data.params} />
<About />
