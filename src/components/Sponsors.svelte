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
      <div class="embla__slide" id={item.imgClass}>
        <a href={item.linkUrl} target="_new">
          <div class="card shadow-xl" id="platinum">
            <figure class="px-10 pt-10">
              <img src={item.imgUrl} alt={item.name} />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title uppercase">{item.imgClass} Sponsor</h2>
            </div>
          </div>
        </a>
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
    grid-auto-columns: 10%;
  }
  .embla__slide {
    margin: 0 20px;
  }
  #platinum {
    @apply bg-slate-300;
    @apply rounded-xl;
  }
  #platinum > div > h2 {
    @apply text-neutral-focus;
  }
</style>
