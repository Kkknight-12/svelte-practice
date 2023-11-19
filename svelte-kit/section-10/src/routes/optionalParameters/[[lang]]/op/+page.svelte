<script>
	import { page } from '$app/stores';
</script>

<!--  we can skip the name of the folder in double square brakcet ( here lang ) -->
<h1>Optional Parameters</h1>

<h1>{JSON.stringify($page.params)}</h1>
<h1>same page is rendered</h1>

<div class="nav">
	<a href="/optionalParameters/en/op">To language page</a>
	<a href="/optionalParameters/op">skip language page</a>
</div>

<style>
	.nav {
		display: flex;
		flex-direction: column;
		gap: 20px;
		font-size: 20px;
	}
</style>
