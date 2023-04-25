<script>
	import { onMount } from "svelte";
	import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

	const MAPBOX_TOKEN = 'MAPBOX_ACCESS_TOKEN';

	onMount(() => {
		mapboxgl.accessToken = MAPBOX_TOKEN;
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v12',
			center: [-74.5, 40], // Example coordinates
			zoom: 9 // Example zoom level
		});
	});
</script>

<div id="map" style="height: 75vh"></div>
