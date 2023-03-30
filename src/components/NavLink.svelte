<script>
  import { page } from '$app/stores';
  import Icon from '$lib/Icon.svelte';
  export let title;
  export let href;
</script>

<a {href} class="link" class:active={$page.path == href}>
  <Icon {title} />
</a>

<style>
  a.active {
    background-color: rgba(0,0,0,0.24);
  }
</style>
