<script>
  import leaf from '$assets/svg/bg-leaves.svg'
</script>

<div class="spacer">
  <img class="leaf-divider" src={ leaf } alt="leave divider">
</div>

<style lang="postcss">
  .spacer {
    position: relative;
    text-align: center;
    & .leaf-divider {
      width: 32px;
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      height: 2px;
      width: 4rem;
      background-color: var(--primary);
      transform: translate(calc(-100% - 1.6rem), -50%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      height: 2px;
      width: 4rem;
      background-color: var(--primary);
      transform: translate(1.5rem, -50%);
    }
  }
</style>