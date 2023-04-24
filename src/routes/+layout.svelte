<script>
	import '../app.css';
	import { page } from "$app/stores";
	import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
	let isDrawerOpen = false;

	// toggle the drawer state
	// @ts-ignore
	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}

	// close the drawer after a menu link is clicked
	function handleLinkClick() {
		isDrawerOpen = false;
	}

	const pages = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events", icon: "events" },
    { name: "Culture", href: "/culture" },
    { name: "Family Fun", href: "/family", icon: "family" },
    { name: "Stickball", href: "/stickball", icon: "stickball" },
    { name: "Pageant", href: "/pageant" },
    { name: "Competitions", href: "/competitions", icon: "competitions" },
    { name: "Fair Map", href: "/map", icon: "map" },
  ];
  $: currentRoute = $page.url.pathname;

	var chatbox = document.getElementById('fb-customer-chat');
	// @ts-ignore
	chatbox.setAttribute("page_id", "288707011210895");
	// @ts-ignore
	chatbox.setAttribute("attribution", "biz_inbox");

	// @ts-ignore
	window.fbAsyncInit = function() {
		// @ts-ignore
		FB.init({
			xfbml            : true,
			version          : 'v16.0'
		});
	};

	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		// @ts-ignore
		js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
		// @ts-ignore
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
</script>

<!-- Messenger Chat Plugin Code -->
<div id="fb-root"></div>

<!-- Your Chat Plugin code -->
<div id="fb-customer-chat" class="fb-customerchat">
</div>

<div class="drawer" data-open={isDrawerOpen}>
	<input id="my-drawer" type="checkbox" class="drawer-toggle" checked={isDrawerOpen} />
	<div class="drawer-content">
		<!-- Page content here -->
		<Navbar />
		<section class="mt-16">
			<slot />
		</section>
    <Footer />
	</div>
  <div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<!-- Sidebar content here -->
			{#each pages as page}
			<li>
				<a on:click={handleLinkClick} href={page.href} class:glass={currentRoute == page.href}>
						{#if page.icon}<img src="/icons/{page.icon}.svg" class="h-6 w-auto text-white" alt={page.name}/>{/if}
						{page.name}
				</a>
			</li>
			{/each}
		</ul>
	</div>
</div>
