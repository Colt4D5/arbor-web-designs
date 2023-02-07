<script>
  import Button from '$components/Button.svelte'
  import heroWave from '$assets/svg/hero-wave.svg'
  import heroWaveDark from '$assets/svg/hero-wave_dark.svg'
</script>

<section id="hero">
  <div class="container">
    <h1>Web Design & Development</h1>
    <p>Where <strong>beautiful design</strong> and top-tier <strong>performance</strong> is grafted together to get you in front of your clients, all for only <strong>$150/mo</strong> and <strong>$0 down</strong>.</p>
    <Button href="/contact">Let's Get Started</Button>
  </div>
  <picture>
    <img class="wave" src={ heroWave } alt="Wave" id="wave" />
  </picture>
  <picture>
    <img class="wave-dark" src={ heroWaveDark } alt="Wave" id="wave-dark" />
  </picture>

  <picture>
    <source media="(max-width: 1023px)" srcset="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/mockup_qcl2hf.webp">
    <source media="(min-width: 1024px)" srcset="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/mockup_qcl2hf.webp">
    <img src="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/mockup_qcl2hf.webp" alt="Web Mockups" id="mockup" />
  </picture>
</section>

<style lang="postcss">
  #hero {
    position: relative;
    padding: 4rem 1rem 2rem;
    background: linear-gradient(145deg, rgba(var(--primary-dark-rgb), 0.9), rgba(var(--primary-dark-rgb), 0.7)), url(https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/footer-bg-texture_hiflfh.webp);
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
        width: min(95%, 500px);
        margin-bottom: 1rem;
        font-size: clamp(1.75rem, 5vw, 3rem);
        font-weight: 700;
        line-height: 1.2;
        color: #fff;
      }
      & p {
        width: min(95%, 500px);
        margin-bottom: 1rem;
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