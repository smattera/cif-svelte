<script>
  import Sponsors from '../components/Sponsors.svelte';
  import { onMount } from 'svelte';
	
	let now = new Date(), year;
	/**
	 * @type {number[]}
	 */
	let dateString;
	
	onMount(()=> {
    year = now.getFullYear();
    dateString = [year];
	})
</script>

<div class="hero pt-4 bg-error">
  <h1 class="text-3xl font-bold text-center" style="text-shadow:5px 5px 10px #333">Thank you to our 2022 Sponsors</h1>
</div>

<div class="hero py-4 bg-error overflow-hidden">
  <Sponsors />
</div>

<footer class="footer footer-center p-10 bg-countdown text-white">
  <div>
    <img src="./logos/icon.webp" alt="Choctaw Indian Fair" class="h-24 w-auto">
    <p class="font-bold text-xl">
      Choctaw Indian Fair
    </p> 
    <p>
      Copyright © {dateString} · All right reserved · 
      <a href="https://www.choctaw.org" target="_new">
        Mississippi Band of Choctaw Indians
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto inline-block" fill="currentColor" viewBox="0 96 960 960"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z"/></svg>
      </a>
    </p>
  </div> 
  <div>
    <div class="grid grid-flow-col gap-4">
      <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" class="fill-current"><path d="M366,0H146C65.7,0,0,65.7,0,146v220c0,80.3,65.7,146,146,146h220c80.3,0,146-65.7,146-146V146C512,65.7,446.3,0,366,0z M466.37,366.37c0,55-45,100-100,100H145.63c-55,0-100-45-100-100V145.63c0-55,45-100,100-100h220.73c55,0,100,45,100,100V366.37z"/><circle cx="393.63" cy="119.37" r="31"/><path d="M256,123.59c-73.13,0-132.41,59.28-132.41,132.41S182.87,388.41,256,388.41S388.41,329.13,388.41,256 S329.13,123.59,256,123.59z M256,341c-46.94,0-85-38.06-85-85s38.06-85,85-85s85,38.06,85,85S302.94,341,256,341z"/></svg></a>
      <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 120 120" class="fill-current"><path d="M59.62,0c-33.14,0-60,26.86-60,60s26.86,60,60,60s60-26.86,60-60S92.76,0,59.62,0z M59.62,110.35 c-27.8,0-50.35-22.54-50.35-50.34c0-27.8,22.54-50.35,50.35-50.35l0,0c27.81,0,50.35,22.54,50.35,50.34 C109.97,87.81,87.43,110.35,59.62,110.35z"/><path d="M82.71,82.27c-0.9,1.48-2.84,1.95-4.32,1.04c-11.82-7.22-26.7-8.86-44.23-4.85c-1.69,0.38-3.37-0.67-3.76-2.36 c-0.39-1.69,0.67-3.37,2.36-3.76c19.18-4.38,35.63-2.49,48.9,5.62C83.15,78.86,83.62,80.79,82.71,82.27z"/><path d="M88.87,68.56c-1.14,1.85-3.55,2.43-5.4,1.29c-13.53-8.32-34.16-10.73-50.17-5.87c-2.08,0.63-4.27-0.54-4.9-2.62 c-0.63-2.08,0.55-4.26,2.62-4.9c18.28-5.55,41.01-2.86,56.56,6.69C89.43,64.3,90.01,66.72,88.87,68.56L88.87,68.56z"/><path d="M89.4,54.28c-16.23-9.64-43-10.52-58.49-5.82c-2.49,0.75-5.12-0.65-5.87-3.14c-0.75-2.49,0.65-5.12,3.14-5.87 c17.78-5.4,47.35-4.36,66.03,6.73c2.24,1.33,2.98,4.22,1.65,6.45C94.53,54.88,91.64,55.61,89.4,54.28L89.4,54.28z"/></svg></a>
    </div>
  </div>
</footer>

<style>
	.bg-countdown {
    background: url("/panel.svg") center repeat,
    #212527;
		background-size: auto;
    background-blend-mode: lighten;
	}
</style>
