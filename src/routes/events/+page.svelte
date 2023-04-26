<script>
  const dates = [
    { day: "Wed", num: "05" },
    { day: "Thu", num: "06" },
    { day: "Fri", num: "07" },
    { day: "Sat", num: "08" },
    { day: "Mon", num: "10" },
    { day: "Tue", num: "11" },
    { day: "Wed", num: "12" },
    { day: "Thu", num: "13" },
    { day: "Fri", num: "14" },
    { day: "Sat", num: "15" },
  ]
  const day01events = [
    { time: "6:00 PM", category: "World Series Stickball", title: "Opening Ceremonies, Fallen Tushka Ceremony, & Happy Feet Social Dancers", location: "Warrior Stadium" },
    { time: "7:00 PM", category: "World Series Stickball", title: "Alla Tik Tóli (14-17) Exhibition Game", location: "Warrior Stadium" },
    { time: "8:00 PM", category: "World Series Stickball", title: "Legends: Men's (50+) Exhibition Game: North VS South", location: "Warrior Stadium" },
    { time: "9:00 PM", category: "World Series Stickball", title: "Women's (35+) Exhibition Game: North VS South", location: "Warrior Stadium" },
    { time: "10:00 PM", category: "World Series Stickball", title: "Men's Division: Game 1", location: "Warrior Stadium" },
  ];
</script>

<div class="hero bg-section flex flex-col">
	<img src="/img/event-banner.webp" alt="Events" class="hidden md:block w-full h-auto p-4" style="-webkit-filter: drop-shadow(2px 2px 4px #222);filter: drop-shadow(2px 2px 4px #222);">
	<img src="/img/event-banner02.webp" alt="Events" class="md:hidden w-full h-auto mt-8 p-4" style="-webkit-filter: drop-shadow(2px 2px 4px #222);filter: drop-shadow(2px 2px 4px #222);">

	<h2 class="font-bold m-20 p-4 text-5xl outline outline-neutral rounded-lg text-center" style="text-shadow:3px 3px 6px #333;box-shadow:6px 6px 12px #333;">2023 Fair Schedule Coming Soon!</h2>

		<!-- <div class="tabs tabs-boxed items-center align-middle gap-5 w-full">
      {#each dates as date}
			<a
				href="/"
				class="tab h-28 flex-col text-xl grow transition ease-in-out delay-150 hover:scale-110 duration-300"
				>{date.day}<br />Jul<br />
				<h1 class="text-5xl">{date.num}</h1></a
			>
      {/each}
		</div> -->

		

		<!-- <table class="table table-auto w-full">
			<thead>
				<tr>
					<th>Time</th>
					<th>Event</th>
					<th>Location</th>
				</tr>
			</thead>
			<tbody>
				{#each day01events as event}
				<tr>
					<td>{event.time}</td>
					<td style="word-wrap:break-word">
						{#if event.category}<span class="text-sm">{event.category}</span>{/if}
						{event.title}
					</td>
					<td>{event.location}</td>
				</tr>
				{/each}
			</tbody>
		</table> -->

</div>

<style>
  .bg-section {
    background: center / cover url("/isometric.svg"),
    linear-gradient(to bottom right, red, maroon);
    background-blend-mode: darken;
  }
</style>
