<script>
	import CIFVideoWeb from "$lib/images/CIFVideoWeb.mp4"
	import ChiefPrincess from "$lib/images/chiefprincess.webp"
</script>

<svelte:head>
	<title>Choctaw Indian Fair | Home</title>
</svelte:head>

<video id="bg-video" autoplay loop muted>
	<source src={CIFVideoWeb} />
</video>

<div class="hero py-24">
  <div class="hero-content flex-col lg:flex-row gap-14">
    <img src={ChiefPrincess} class="max-w-lg rounded-lg shadow-2xl outline outline-offset-2 outline-neutral" alt="Svelte Logo" />
    <div class="text-center">
      <h1 class="text-5xl font-bold">Halito!</h1>
      <p class="py-6">Greetings from the Choctaw Indian Reservation. We invite you to join us July 12-15 for our 73rd annual Choctaw Indian Fair. The fair takes place on our centuries-old homeland in beautiful Choctaw, Mississippi. We gather each July to celebrate our heritage and share our beautiful and vibrant culture with our friends and neighbors. This year’s fair theme is:</p>
			<h2 class="text-4xl font-bold">"The Choctaw Spirit Lives On"</h2>
      <p class="py-6">Fairgoers will experience the magnificent journey of our people through historical and cultural displays, social dancing, tribal arts & crafts, Choctaw stickball – the granddaddy of all field sports – as well as the Choctaw Indian Princess Pageant and traditional Choctaw food. The fair also offers carnival rides and games for the young and old alike, Shawi’s Discovery Zone and chart-topping musical acts each night. There’s something for everyone at the Choctaw Indian Fair – we’ll see you soon!</p>
			<h2 class="text-4xl font-bold">Yakoki!</h2>
		</div>
  </div>
</div>

<style>
	#bg-video {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 80%;
		object-fit: cover;
		z-index: -1;
	}
</style>
