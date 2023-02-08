<script>
  import Button from '$components/Button.svelte'

  import observer from '$utils/useObserverAction';
  import { fadeUp } from '$utils/useObserverAction';
</script>


<section id="intro" aria-labelledby="intro-title">
  <div class="container">
    <div data-transition="fade-up" use:observer on:enterViewport={fadeUp} class="intro-body-text">
      <h2 id="intro-title">why <theme-color>Arbor</theme-color></h2>
      <p>Arbor Web Designs offers an innovative and affordable subscription model designed for small businesses where every dollar counts while still benefiting from the stunning design and top-tier performance you'd expect from an agency.</p>
      <p>We will work closely with you to determine your unique needs and goals to deliver a website that is custom-tailored to your brand.</p>
      <Button href="/#price-cards">LEARN MORE</Button>
  </div>
</section>

<style lang="postcss">
  #intro {
    text-align: center;
    & .container {
      & .intro-body-text {
        max-width: 800px;
        margin-inline: auto;
      }
    }
  }
</style>
