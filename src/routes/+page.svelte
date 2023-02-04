<script>
	import Hero from "$components/home/Hero.svelte";
	import Intro from "$components/home/Intro.svelte";
	import Results from "../lib/components/home/Results.svelte";

</script>
<svelte:head>
  <title>Arbor Web Designs | Moreno Valley, CA</title>
</svelte:head>

<Hero />
<Intro />
<Results />

<style lang="postcss">
  h1 {
    margin-top: 8rem;
  }
</style>
