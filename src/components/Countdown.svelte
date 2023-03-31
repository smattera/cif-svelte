<script>
  import { onMount, onDestroy } from 'svelte';
  
  let endTime = new Date('2023-07-12T11:00:00'); // set the end time
  let timeLeft = endTime.getTime() - Date.now(); // calculate the time remaining in milliseconds
  
  const countdownInterval = setInterval(() => {
    timeLeft = endTime.getTime() - Date.now();
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
  
  /**
	 * @param {number} time
	 */
  function formatTime(time) {
    // function to format the remaining time as days, hours, minutes, and seconds
    const days = Math.floor(time / (24 * 60 * 60 * 1000));
    const hours = Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);
    return {
			days: days.toString().padStart(2, '0'), 
			hours: hours.toString().padStart(2, '0'),
			minutes: minutes.toString().padStart(2, '0'),
			seconds: seconds.toString().padStart(2, '0')
		}
  }

	$: countdownTime = formatTime(timeLeft);
  
  onMount(() => {
    // start the countdown when the component is mounted
    countdownInterval;
  });
  
  onDestroy(() => {
    // clean up the interval when the component is unmounted
    clearInterval(countdownInterval);
  });
</script>

{#if timeLeft > 0}
<div class="hero py-4 bg-error">
	<div class="hero-content flex-col lg:flex-row text-base-300 font-bold w-fit">
		<h1 class="uppercase text-xl">Countdown to the 73rd Choctaw Indian Fair:</h1>
		<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
			<div class="flex flex-col p-2 bg-base-100 rounded-box text-white">
				<span class="countdown font-mono text-5xl">
					{countdownTime.days}
				</span>
				days
			</div>
			<div class="flex flex-col p-2 bg-base-100 rounded-box text-white">
				<span class="countdown font-mono text-5xl">
					{countdownTime.hours}
				</span>
				hours
			</div>
			<div class="flex flex-col p-2 bg-base-100 rounded-box text-white">
				<span class="countdown font-mono text-5xl">
					{countdownTime.minutes}
				</span>
				min
			</div>
			<div class="flex flex-col p-2 bg-base-100 rounded-box text-white">
				<span class="countdown font-mono text-5xl">
					{countdownTime.seconds}
				</span>
				sec
			</div>
		</div>
	</div>
</div>
{/if}
