<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
	import Drawer from '../components/Drawer.svelte';
	let isDrawerOpen = false;

	// toggle the drawer state
	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}

	// close the drawer after a menu link is clicked
	function handleLinkClick() {
		isDrawerOpen = false;
	}
</script>

<div class="drawer" data-oppen={isDrawerOpen}>
	<input id="my-drawer" type="checkbox" class="drawer-toggle" checked={isDrawerOpen} />
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
