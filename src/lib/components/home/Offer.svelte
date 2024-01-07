<script>
  export let params

  import observer, { fadeUp } from '$utils/useObserverAction';
  // import { fadeUp } from '$utils/useObserverAction';

  import checkmark from '$assets/svg/checkmark.svg'
</script>

<section data-transition="fade-up" use:observer on:enterViewport={fadeUp} id="offer">
  <div class="container grid">
    <div class="left">
      <h2 id="offer-title"><theme-color>$0</theme-color> down, <theme-color>{params === 'presale33' ? '$100' : '$150'}</theme-color> per month</h2>
      <p><theme-color>Arbor Web Design</theme-color> services start at just $150 a month, with $0 down, for a 5-page website. With our help, you can create a professional and effective online presence without breaking the bank.

      <p>You own your domain, content, listings, and profiles, which means you have complete control over your online presence and can make changes or updates at any time. <a href="/contact">Contact us today</a> to get started!</p>
        
      <!-- <p>Don't settle for a cookie-cutter website that looks like everyone else's. Let us help you create a custom website that stands out from the competition, drives more traffic to your site, and helps you grow your business online. Contact us today to get started!</p> -->

    </div>
    <div class="right">
      <div class="item">
        <h3>Hosting Fees Included</h3>
        <p>Secure, reliable, and fast website hosting without added costs.</p>
      </div>
      <div class="item">
        <h3>free lifetime edits</h3>
        <p>24-hour turnaround for unlimited edits.</p>
      </div>
      <div class="item">
        <h3>24/7 Customer Service</h3>
        <p>Peace of mind for 24/7 technical assistance, questions, and edits.</p>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  #offer {
    z-index: 2;
    position: relative;
    border-radius: 6rem 0 6rem 0;
    & .container {
      margin: 0 auto;
      gap: 3rem;
      & h2 {
        font-size: clamp(1.75rem, 4vw, 2.25rem);
      }
      & .right {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        &::before {
          content: url(../../assets/svg/bg-leaves.svg);
          position: absolute;
          width: 80%;
          aspect-ratio: 1/1;
          z-index: -1;
          opacity: 0.15;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        & .item {
          padding-left: 2rem;
          margin-bottom: 0.5rem;
          & h3 {
            font-size: 1.25rem;
            margin: 0;
            position: relative;
            text-transform: lowercase;
            &::before {
              content: url(../../assets/svg/checkmark.svg);
              position: absolute;
              top: 50%;
              left: 0;
              width: 32px;
              height: 32px;
              transform: translate(calc(-100% - 6px), -50%)
            }
          }
          & p {
            margin: 0;
          }
        }
      }
    }
  }
</style>