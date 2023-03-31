<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import Autoplay from 'embla-carousel-autoplay'
  import { carouselData } from '$lib/sponsorData';

  const emblaConfig = {
    options: { loop: true },
    plugins: [Autoplay()],
  }
</script>

<div class="embla" use:emblaCarouselSvelte={emblaConfig}>
  <div class="embla__container">
    {#each carouselData as item}
      <div class="embla__slide">
        <img src={item.imgUrl} alt={item.name}>
        <h1 class="text-xl font-bold text-center uppercase">{item.imgClass} Sponsor</h1>
      </div>
    {/each}
  </div>
</div>

<style>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 15%;
  }
  .embla__slide {
    margin: 0 20px;
  }
</style>
