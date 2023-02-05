<script>
  import Button from '$components/Button.svelte'
  import heroWave from '$assets/svg/hero-wave.svg'
  import heroWaveDark from '$assets/svg/hero-wave_dark.svg'

  import mockup from '$assets/img/mockups1.png'
</script>

<section id="hero">
  <div class="container">
    <h1>Web Design & Development</h1>
    <p>Where <strong>beautiful design</strong> and top-tier <strong>performance</strong> is grafted together to get you in front of your clients, all for only $150/mo.</p>
    <Button href="/contact">Let's Get Started</Button>
  </div>
  <picture>
    <img class="wave" src={ heroWave } alt="Wave" id="wave" />
  </picture>
  <picture>
    <img class="wave-dark" src={ heroWaveDark } alt="Wave" id="wave-dark" />
  </picture>

  <picture>
    <source media="(max-width: 1023px)" srcset={ mockup }>
    <source media="(min-width: 1024px)" srcset={ mockup }>
    <img src={ mockup } alt="Web Mockups" id="mockup" />
  </picture>
</section>

<style lang="postcss">
  #hero {
    position: relative;
    padding: 4rem 1rem 2rem;
    background: linear-gradient(145deg, rgba(var(--primary-rgb), 0.8), rgba(var(--primary-rgb), 0.5));
    height: 700px;
    & .container {
      padding: 0;
      color: #fff;
      margin-top: 125px;
      margin-bottom: 3rem;
      position: relative;
      width: min(90%, 1200px);
      z-index: 3;
      & h1 {
        /* text-transform: none; */
        width: min(95%, 500px);
        margin-bottom: 1rem;
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        line-height: 1.2;
        color: #fff;
      }
      & p {
        width: min(95%, 500px);
        margin-bottom: 1rem;
        /* line-height: 1.7; */
        color: #fff;
      }
      & :global(.button) {
        background-color: #fff;
        color: var(--secondary);
        border: none;
        box-shadow: 4px 8px 8px rgb(0 0 0 / 0.2);
        &:hover {
          background-color: var(--secondary);
          color: #fff;
        }
      }
    }

    & #wave, & #wave-dark {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
    & #wave-dark {
      display: none;
    }

    & #mockup {
      position: relative;
      z-index: 2;
    }
    
    @media screen and (width >= 64em) {
      height: 900px;
      padding-top: 100px;
      margin-bottom: 6rem;
      padding-bottom: 0;
      & #mockup {
        position: absolute;
        right: 14vw;
        top: 60%;
        width: clamp(500px, 50vw, 700px);
        transform: translateY(-50%);
      }
    }
  }
  :global(html[data-theme="dark"]) {
    & #hero {
      background: linear-gradient(145deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(../../assets/img/hero-dark.webp);
      background-size: cover;
      background-position: center;
      & #wave {
        display: none;
      }
      & #wave-dark {
        display: block;
      }
    }
  }
</style>