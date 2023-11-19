<script>
	import { page } from '$app/stores';
</script>

<h1>Rest Parameters</h1>

<div class="nav">
	<a href="/restParameters/123">Id</a>
	<a href="/restParameters/123/sdfsdf/asd/asd">Path</a>
	<a href="/restParameters/123/sdfsdf/asd/asd/edit">Edit</a>
</div>

<h1>
	{JSON.stringify($page.params)}
</h1>

<style>
	.nav {
		display: flex;
		flex-direction: column;
		font-size: 20px;
		gap: 20px;
	}
</style>
