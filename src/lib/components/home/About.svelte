<script>
  import observer from '$utils/useObserverAction';
  import { fadeUp } from '$utils/useObserverAction';
</script>

<section data-transition="fade-up" use:observer on:enterViewport={fadeUp} id="about" aria-labelledby="about-title">
  <div class="container">
    <h2 id="about-title">about <theme-color>Arbor</theme-color></h2>

    <p>I'm Colton Arthur Allen, a professional <b>web designer and developer</b> based in the Inland Empire, CA.</p>
    
    <p>I offer an <i>array</i> of web services with superior quality, quick turnaround, and 24/7 customer support through an innovative and affordable subscription model. Unlike large firms — where it's easy to get lost in a forest of clients — I provide personalized attention, handling everything from design and development to SEO and copywriting.</p>

    <p>Discover more about me on my <a href="/about-arbor/">about page</a>.</p>
  </div>
</section>

<style lang="postcss">
  #about {
    text-align: center;
    margin-bottom: 8rem;
    position: relative;
    overflow-x: hidden;
    &::before {
      content: url(../../assets/svg/bg-leaves.svg);
      position: absolute;
      left: -2rem;
      bottom: 0;
      width: 12rem;
      opacity: 0.1;
    }
    &::after {
      content: url(../../assets/svg/bg-leaves.svg);
      position: absolute;
      right: -2rem;
      top: 0;
      width: 16rem;
      transform: scaleX(-100%);
      opacity: 0.1;
    }
    & p {
      max-width: 800px;
      margin: 0 auto 1rem;
    }
  }
</style>
