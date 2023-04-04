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

<div class="hero py-4 bg-home">
	<div class="hero-content flex flex-wrap">

    <img src="./img/event-banner.webp" alt="Events" class="hidden md:block w-fit drop-shadow-2xl">
		<img src="./img/event-banner02.webp" alt="Events" class="md:hidden w-fit">
		<h1 class="font-bold text-9xl" style="text-shadow:5px 5px 10px #333">EVENTS</h1>

		<div class="tabs tabs-boxed items-center align-middle gap-5 w-full">
      {#each dates as date}
			<a
				href="/"
				class="tab h-28 flex-col text-xl grow transition ease-in-out delay-150 hover:scale-110 duration-300"
				>{date.day}<br />Jul<br />
				<h1 class="text-5xl">{date.num}</h1></a
			>
      {/each}
		</div>

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
</div>
