<script>

</script>

<a id="card-link" target="_blank">
  <div class="card__header">
    <!-- <div>
      <img class="card__header header__img skeleton" id="logo-img" alt="" />
    </div> -->
    <h3 class="card__header header__title" id="card-title">
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
    </h3>
  </div>

  <div class="card__body">
    <div class="card__body body__text" id="card-details">
      <div class="skeleton skeleton-text skeleton-text__body"></div>
    </div>

    <div class="card__body body__img">
      <img class="skeleton" alt="" id="cover-img" />
    </div>
  </div>

  <h3 class="card__header header__title" id="card-title">
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-text"></div>
  </h3>
</a>

<style lang="postcss"> 
  img[alt] {
    text-indent: -10000px;
  }

  .card__header {
    margin-bottom: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin: 0.5rem 0 0.5rem 0.5rem;
  }
/* 
  .card__header .header__img {
    height: 2rem;
    width: 2rem;
    -o-object-fit: cover;
      object-fit: cover;
    border-radius: 50%;
  } */

  .card__header .header__title {
    font-size: 1.0625rem;
    line-height: 1.375rem;
    color: #0e1217;
    font-weight: 700;
    margin: 0.5rem;
  }

  .card__body {
    margin: 0 0.5rem;
  }

  .card__body .body__text {
    color: #525866;
    font-size: 0.8125rem;
  }

  .card__body .body__img {
    height: 10rem;
    margin: 0.5rem 0;
    width: min(100%, 400px);
  }

  .card__body .body__img img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
      object-fit: cover;
    margin: auto;
    border-radius: 0.75rem;
  }


  .skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
  }
  
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
  
  .skeleton-text {
    width: 100%;
    height: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
  }
  
  .skeleton-text__body {
    width: 75%;
  }
</style>