<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import Autoplay from 'embla-carousel-autoplay'

  const emblaConfig = {
    options: { loop: true },
    plugins: [Autoplay()],
  }
</script>

<div class="embla" use:emblaCarouselSvelte={emblaConfig}>
  <div class="embla__container">
    <div class="embla__slide">Slide 1</div>
    <div class="embla__slide">Slide 2</div>
    <div class="embla__slide">Slide 3</div>
    <div class="embla__slide">Slide 4</div>
    <div class="embla__slide">Slide 5</div>
    <div class="embla__slide">Slide 6</div>
    <div class="embla__slide">Slide 7</div>
    <div class="embla__slide">Slide 8</div>
    <div class="embla__slide">Slide 9</div>
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
    flex: 0 0 25%;
    min-width: 0;
  }
</style>
