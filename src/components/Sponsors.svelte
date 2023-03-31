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
        <img src={item.imgUrl} alt={item.name} class={item.imgClass}>
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
    display: flex;
  }
  .embla__slide {
    flex: 0 0 auto; /* Adapt slide size to its content */
    min-width: 0;
    max-width: 100%; /* Prevent from growing larger than viewport */
    margin-right: 20px;
    margin-left: 10px;
  }
  @media (min-width: 768px) {
    .embla__slide {
      flex: 0 0 300px;
      min-width: 0;
    }
  }
</style>
