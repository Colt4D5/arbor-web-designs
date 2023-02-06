<script>
  import observer from '$utils/useObserverAction';
  import { fadeUp } from '$utils/useObserverAction';
</script>

<section data-transition="fade-up" use:observer on:enterViewport={fadeUp} id="about" aria-labelledby="about-title">
  <div class="container">
    <h2 id="about-title">About <theme-color>Arbor</theme-color></h2>
    <p class="highlight">My name is Colton Arthur Allen and I’m a professional web designer and developer located in the Inland Empire, CA.<!-- Working as a front-end web developer at a marketing firm who partners with one of the largest beauty product retailers in the world has taught me a great many things when it comes to properly built websites that are user friendly and performant. --></p>

    <p>I offer an <span style="font-style:italic;">array</span> of web services with a new, more affordable alternative than a traditional web design firm: all the benefits of superior quality, fast turnaround times, and the personal touch with 24/7 customer service, all at an affordable subscription model.</p>

    <p>Because I'm not a large-scale web design firm it affords me the ability to give you and your website the attention it deserves. And because I do all of the work myself, from designing to developing, to SEO strategy, even to the copywriting, your site will be built faster with more focus upon it, </p>

    <p>You can learn more about me on my <a href="/about/">about page</a>.</p>
    <!-- <p>I am Colton, a web designer and developer creating visually stunning and user-friendly websites that drive results. I am skilled in both design and development, ensuring projects are delivered on time and within budget. <a class="alt" href="/about/">LEARN MORE</a></p> -->
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
      /* line-height: 1.7; */
      /* font-size: clamp(1em, 3vw, 1.1em); */
      margin: 0 auto 1rem;
      &.highlight {
        font-size: clamp(1.25em, 3vw, 1.4em);
      }
    }
  }
</style>