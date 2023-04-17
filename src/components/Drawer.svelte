<script>
	import { page } from "$app/stores";

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

  let isDrawerOpen;

  function handleLinkClick() {
		isDrawerOpen = false;
	}

</script>

<div class="drawer-side">
  <label for="my-drawer" class="drawer-overlay" />
  <ul class="menu p-4 w-80 bg-base-100 text-base-content">
    <!-- Sidebar content here -->
    {#each pages as page}
    <li>
      <a href={page.href} class:glass={currentRoute == page.href} on:click={handleLinkClick}>
          {#if page.icon}<img src="/icons/{page.icon}.svg" class="h-6 w-auto text-white" alt={page.name}/>{/if}
          {page.name}
      </a>
    </li>
    {/each}
  </ul>
</div>
