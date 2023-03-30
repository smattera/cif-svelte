<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
	import Drawer from '../components/Drawer.svelte';
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
		<Navbar />
		<section class="mt-16">
			<slot />
		</section>
    <Footer />
	</div>
  <Drawer />
</div>
