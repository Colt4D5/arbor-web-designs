<script>
  export let year = new Date().getFullYear();
  import logo from '$assets/svg/logo.svg'
  import footerWave from '$assets/svg/footer-wave.svg'
</script>

<footer id="footer">
  <div class="footer-top container">
    <div class="footer-col logo">
      <a href="/">
        <img src={ logo } alt="Web Designs">
      </a>
    </div>
    <div class="footer-col navigation">
      <h2>Navigation</h2>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#about-me">About Me</a></li>
          <li><a href="/#price-cards">Pricing</a></li>
          <li><a href="/contact/">Contact Me</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer-col contact-form">
      <h2>Contact Us</h2>

      <form id="contact" name="contact" method="post" data-netlify="true">
        <div class="input-group">
          <input id="name" aria-label="name" class="input1" name="name" placeholder="Full Name" type="text" required>
          <div aria-hidden="true" class="hover-box"></div>
        </div>

        <div class="input-group">
          <input id="email" aria-label="email" class="input1 right" name="email" placeholder="Email Address" type="email" required>
          <div aria-hidden="true" class="hover-box"></div>
        </div>

        <p class="form-submit">
          <button name="submit" type="submit" id="contact-submit" class="button-solid" data-submit="...Sending">Get Started</button>
        </p>
      </form>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="disclaimer">Copyright © { year } | <a href="/">Arbor Web Designs</a> | All Rights Reserved</p>
  </div>
  <picture>
    <source media="(max-width: 1023px)" srcset={ footerWave }>
    <source media="(min-width: 1024px)" srcset={ footerWave }>
    <img id="footer-wave" src={ footerWave } alt="Arbor Web Designs | Riverside, CA" />
  </picture>
</footer>

<style lang="postcss">
  footer {
    position: relative;
    background: linear-gradient(145deg, rgba(var(--primary-rgb), 0.8), rgba(var(--primary-rgb), 0.8)), url(src/lib/assets/img/footer-bg-texture.webp);
    overflow: hidden;
    text-align: center;
    color: #fff;
    margin-top: -6rem;
    & .footer-top.container {
      padding: 32vw 1rem 3rem;
      & .footer-col {
        margin-bottom: 2.5rem;
        & h2 {
          display: inline-block;
          margin: 0 auto;
          position: relative;
          margin-bottom: 1.5rem;
          color: #fff;
          font-size: clamp(1.5rem, 4vw, 2rem);
          &::after {
            content: '';
            position: absolute;
            height: 2px;
            width: 80%;
            bottom: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary-hover);
          }
        }
        & nav {
          & ul {
            display: block;
            margin: 0;
            & li {
              display: block;
              padding: 0.15em 0;
              & a {
                font-size: clamp(1.1em, 3vw, 1.25em);
              }
            }
          }
        }
        & a {
          color: #fff;
          &:hover {
            color: var(--secondary-hover);
          }
        }
      }
    }
    & #footer-wave {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: auto;
      pointer-events: none;
    }
    & .footer-top {
      & .footer-col {
        &.logo {
          & img {
            max-width: 250px;
            filter: invert(1);
            display: inline;
            margin: 0 auto;
          }
        }
        &.contact-form {
          & form {
            margin-top: 1rem;
            & input:not([type="submit"]) {
              padding: 0.5rem;
              /* width: min(100%, 250px); */
              border: 1px solid #ccc;
              border-radius: 1em 0.25em 1em 0.25em;
              background: #fff;
              margin: 0 0 15px;
              padding: 15px;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }
            & button {
              /* width: min(100%, 250px); */
              background-color: var(--secondary);
              color: #fff;
              text-transform: uppercase;
              padding: 1rem;
              border: none;
              box-shadow: 4px 3px 6px rgb(0 0 0 / 0.4);
              border-radius: 2em 0 2em 0;
              transition: all 0.3s ease;
              &:hover {
                border-color: transparent;
                background-color: var(--secondary-hover);
              }
            }
          }
        }
      }
    }
    & .footer-bottom {
      background-color: rgb(0 0 0 / 0.15);
      & p {
        text-align: center;
        font-size: 0.8rem;
        color: #fff;
        width: max(60%, 300px);
        margin: 0 auto;
        padding: 1rem 0;
        & a {
          color: #fff;
          text-decoration: underline;
          &:hover {
            color: var(--primary-hover);
          }
        }
      }
    }
    @media screen and (min-width: 40em) {
      margin-top: -12vw;
      & .footer-top.container {
        padding: 32vw 1rem 3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        & .footer-col {
          text-align: left;
          padding-left: 4rem;
          & h2 {
            &::after {
              width: calc(100% + 2rem);
              left: 0;
              transform: none;
            }
          }
        }
      }
    }
  }
</style>