<script>
	import { fairDates } from '$lib/fairDates';
	import { day01events } from '$lib/day01Events';
	import { day02events } from '$lib/day02Events';
	import { day03events } from '$lib/day03Events';
	import { day04events } from '$lib/day04Events';
	import { day05events } from '$lib/day05Events';
	import { day06events } from '$lib/day06Events';
	import { day07events } from '$lib/day07Events';
	import { day08events } from '$lib/day08Events';
	import { day09events } from '$lib/day09Events';
	import { day10events } from '$lib/day10Events';
</script>

<div class="hero bg-section flex flex-col">
	<img
		src="/img/event-banner.webp"
		alt="Events"
		class="hidden md:block w-11/12"
		style="-webkit-filter: drop-shadow(2px 2px 4px #222);filter: drop-shadow(2px 2px 4px #222);"
	/>
	<img
		src="/img/event-banner02.webp"
		alt="Events"
		class="md:hidden w-11/12"
		style="-webkit-filter: drop-shadow(2px 2px 4px #222);filter: drop-shadow(2px 2px 4px #222);"
	/>

	<div
		class="tabs tabs-boxed items-center align-middle gap-3 uppercase bg-transparent w-11/12 pb-10"
	>
		{#each fairDates as date}
			<a
				href="#"
				class="tab h-32 flex-col text-xl grow transition ease-in-out delay-150 bg-base-100 hover:scale-110 duration-300 outline outline-neutral"
			>
				<strong class="text-2xl">{date.day}</strong>Jul<br />
				<h1 class="text-5xl">{date.num}</h1>
			</a>
		{/each}
	</div>

	<div
		class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mb-20 w-11/12 rounded-lg outline outline-neutral bg-base-100"
	>
		{#each day01events as event}
			<div class="text-3xl">{event.time}</div>
			<div class="col-span-2">
				{#if event.category}<span class="text-sm">{event.category}</span><br />{/if}
				{event.title}
			</div>
			<div class="col-span-2 md:col-span-1">{event.location}</div>
			<hr class="col-span-2 md:col-span-4" />
		{/each}
		<div class="col-span-2 md:col-span-4 italic text-center">End of day</div>
	</div>
</div>

<style>
	.bg-section {
		background: center / cover url('/isometric.svg'), linear-gradient(to bottom right, red, maroon);
		background-blend-mode: darken;
	}
</style>
