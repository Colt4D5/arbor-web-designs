<script>
  export let year = new Date().getFullYear();
  import logo from '$assets/svg/logo.svg'
  import footerWave from '$assets/svg/footer-wave.svg'
</script>

<footer id="footer">
  <div class="footer-top container grid">
    <div class="footer-col logo">
      <a href="/">
        <img src={ logo } alt="Web Designs">
      </a>
      <p>Moreno Valley, CA<br>
      <a href="tel:+19516307569">951.630.7569</a><br>
      <a href="mailto:info@arborwebdesign.com">info@arborwebdesign.com</a></p>
    </div>
    <div class="footer-col navigation">
      <h2>navigation</h2>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about-arbor">About Us</a></li>
          <li><a href="/#price-cards">Pricing</a></li>
          <li><a href="/contact/">Contact Us</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer-col contact-form">
      <h2>contact us</h2>

      <form id="contact" name="footer-contact-form" method="POST" netlify-honeypot="bot-field" data-netlify="true">

        <input type="hidden" name="form-name" value="footer-contact-form" />

        <div class="input-group">
          <input id="name" aria-label="name" class="input1" name="name" placeholder="Full Name" type="text" required>
          <div aria-hidden="true" class="hover-box"></div>
        </div>

        <div class="input-group">
          <input id="email" aria-label="email" class="input1 right" name="email" placeholder="Email Address" type="email" required>
          <div aria-hidden="true" class="hover-box"></div>
        </div>

        <div class="input-group">
          <input id="industry" aria-label="industry" class="input1 right" name="industry" placeholder="Industry" type="text" required>
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
    /* background: linear-gradient(145deg, rgba(var(--primary-rgb), 0.8), rgba(var(--primary-rgb), 0.8)), url(https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/footer-bg-texture_hiflfh.webp); */
    background: linear-gradient(145deg, rgba(var(--primary-dark-rgb), 0.9), rgba(var(--primary-dark-rgb), 0.7)), url(https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/footer-bg-texture_hiflfh.webp);

    text-align: center;
    color: #fff;
    margin-top: -6rem;
    & .footer-top.container {
      padding: 32vw 1rem 3rem;
      margin-inline: auto; 

      & .footer-col {
        margin-bottom: 2.5rem;
        & h2 {
          display: inline-block;
          margin: 0 auto;
          position: relative;
          margin-bottom: 1.5rem;
          color: #fff;
          font-size: clamp(1.25rem, 4vw, 1.5rem);
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
          justify-content: center;
          @media (width > 40em) {
            justify-content: flex-start;
          }
          & ul {
            display: block;
            margin: 0;
            & li {
              display: block;
              padding: 0.15em 0;
              & a {
                font-family: 'Montserrat Alternates', sans-serif;
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
      top: -2px;
      left: 0;
      width: 100vw;
      height: auto;
      pointer-events: none;
    }
    & .footer-top {
      & .footer-col {
        &.logo {
          min-width: 250px;
          & img {
            max-width: 250px;
            filter: invert(1);
            display: inline;
            margin: 0 auto 1rem;
          }
          & p {
            color: #fff;
            line-height: 1.7;
            & a {
              font-weight: bold;
            }
          }
        }
        &.contact-form {
          & form {
            margin-top: 1rem;
            & input {
              font-size: clamp(0.85rem, 3vw, 1rem);
              padding: 0.5rem 0.75rem;
              height: auto;
            }
            & input:not([type="submit"]) {
              border: 1px solid #ccc;
              border-radius: 1em 0.25em 1em 0.25em;
              background: #fff;
              margin: 0 0 15px;
              /* padding: 12px; */
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }
            & button {
              background-color: var(--secondary);
              color: #fff;
              text-transform: lowercase;
              font-family: "Montserrat Alternates", sans-serif;
              font-size: clamp(1.15rem, 3vw, 1.25rem);
              padding: 0.75rem 1rem;
              border: none;
              box-shadow: 4px 3px 6px rgb(0 0 0 / 0.4);
              border-radius: 1.5em 0 1.5em 0;
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
    @media screen and (width >= 40em) {
      margin-top: -12vw;
      & .footer-top.container {
        padding: 32vw 1rem 3rem;
        & .footer-col {
          text-align: left;
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