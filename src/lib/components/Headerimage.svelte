<script>
  export let header
  export let alignment
  export let overlay = ''
  import intHeaderLeaf from '$assets/svg/int-header-leaf.svg'
</script>

<div id="headerimage" class="interior" style={`background-image: url(${header});background-position: ${alignment}`}>
  <div class="overlay" style={overlay}></div>
  <img id="int-header-leaf" src={ intHeaderLeaf } alt="" >
</div>

<style lang="postcss">
  #headerimage {
    height: 300px; 
    background-size: cover;
    position: relative;
    @media (width >= 40em) {
      height: 500px; 
    }
    & #int-header-leaf {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      
    }
  }
</style>