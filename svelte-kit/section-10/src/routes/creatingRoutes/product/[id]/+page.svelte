<script lang="ts">
	import { page } from '$app/stores';

	$: console.log('page ', $page);
</script>

<h1>Product Page</h1>
<h1>Product ID: {$page.params.id}</h1>

<hr />
<!-- ----------------------------------- -->

<h3>Back to Create Route Home Page</h3>

<div class="nav">
	<a href="/creatingRoutes/"> Creating Route </a>
</div>

<style>
	.nav {
		display: flex;
		flex-direction: column;
		gap: 20px;
		font-size: 20px;
	}
</style>
