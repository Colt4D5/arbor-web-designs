<script>
	import { browser } from '$app/environment';
	import { beforeUpdate } from 'svelte';

	import Pricing from '$components/home/Pricing.svelte';
	import About from '$components/home/About.svelte';
	import Hero from "$components/home/Hero.svelte";
	// import Intro from "$components/home/Intro.svelte";
	import Perks from "$components/home/Perks.svelte";
	import Offer from "$components/home/Offer.svelte";
	import Performance from "$components/home/Performance.svelte"
	import Spacer from '$components/Spacer.svelte';

	import {page} from '$app/stores';

  let promoCode = null;
	if (browser) {
		promoCode =  $page.url.searchParams.get('promo') || null;
	}
  // beforeUpdate(() => {
  // });
</script>

<svelte:head>
  <title>Arbor Web Designs | Moreno Valley, CA</title>
</svelte:head>

<Hero />
<!-- <Intro /> -->
<Perks />
<Spacer />
<Performance />
<Offer params={promoCode} />
<Spacer />
<About />
<Pricing />
