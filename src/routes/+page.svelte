<script>
	import Countdown from "../components/Countdown.svelte";
	import Pricing from "../components/Pricing.svelte";
</script>

<svelte:head>
	<title>Choctaw Indian Fair | Home</title>
</svelte:head>

<video autoplay loop muted playsinline class="relative top-0 left-0 w-full object-cover -z-[1] h-[75vh]" poster="./img/CIF-bg.webp">
	<source src="./vid/CIFVideoWeb.mp4" type="video/mp4"/>
</video>

<Countdown />

<section class="py-16 px-5 xl:flex xl:items-center bg-section">
  <div class="items-center px-5 xl:px-0 xl:w-1/2 xl:m-16 mx-auto">
    <img src="./img/chiefprincess.webp" alt="Chief & Princess" class="glass rounded-lg shadow-2xl outline outline-4 outline-offset-4 outline-white" />
  </div>
  <div class="pt-5 xl:pt-0 xl:w-1/2 xl:m-16 text-center">
    <h1 class="text-5xl font-bold mb-4 2xl:text-7xl" style="text-shadow:5px 5px 10px #333">Halito!</h1>
    <p class="mb-8 text-xl 2xl:text-2xl" style="text-shadow:3px 3px 6px #333">Greetings from the Choctaw Indian Reservation. We invite you to join us July 12-15 for our 73rd annual Choctaw Indian Fair. The fair takes place on our centuries-old homeland in beautiful Choctaw, Mississippi. We gather each July to celebrate our heritage and share our beautiful and vibrant culture with our friends and neighbors. This year’s fair theme is:</p>
    <h2 class="text-3xl font-bold mb-8 2xl:text-5xl italic" style="text-shadow:5px 5px 10px #333">"The Choctaw Spirit Lives On"</h2>
    <p class="mb-8 text-xl 2xl:text-2xl" style="text-shadow:3px 3px 6px #333">Fairgoers will experience the magnificent journey of our people through historical and cultural displays, social dancing, tribal arts & crafts, Choctaw stickball – the granddaddy of all field sports – as well as the Choctaw Indian Princess Pageant and traditional Choctaw food. The fair also offers carnival rides and games for the young and old alike, Shawi’s Discovery Zone and chart-topping musical acts each night. There’s something for everyone at the Choctaw Indian Fair – we’ll see you soon!</p>
    <h2 class="text-5xl font-bold mb-4 2xl:text-7xl" style="text-shadow:5px 5px 10px #333">Yakoki!</h2>
  </div>
</section>

<Pricing />

<style>
  .bg-section {
    background: center / cover fixed url("/isometric.svg"),
    red;
    background-blend-mode: darken;
  }
</style>
