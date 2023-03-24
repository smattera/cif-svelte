<script>
	import CIFVideoWeb from "$lib/images/CIFVideoWeb.mp4"
</script>

<svelte:head>
	<title>Home | Choctaw Indian Fair</title>
</svelte:head>

<video id="bg-video" autoplay loop muted>
	<source src={CIFVideoWeb} />
</video>
<div class="justify-center items-center">
	<div class="bg-white shadow-2xl p-6">
		<h1 class="text-5xl font-bold text-gray-800">Hello, world!</h1>
		<p class="text-gray-600 mt-2">This is a background with daisyUI.</p>
	</div>
</div>
