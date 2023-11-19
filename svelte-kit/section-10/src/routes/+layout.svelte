<script>
	import './styles.css';
</script>

<div class="container">
	<nav class="nav">
		<div class="nav-container">
			<a href="/creatingRoutes">Creating Routes</a>
			<a href="/folderAliasCustomAliases"> Folder Alias and Custom Aliases </a>
			<a href="/navigationFunctions"> Navigation Functions</a>
			<a href="/restParameters"> Rest Parameters</a>
			<a
				href="/optionalParameters/op
			"
			>
				Optional Parameters</a
			>
			<a href="/parameterMatcher/123"> Parameter Matcher</a>
		</div>
	</nav>
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.container {
		display: flex;
	}
	.nav-container {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		overflow-y: auto;
		gap: 20px;
		font-size: 20px;
		margin-top: 20px;
		height: 100%;
	}
	.nav {
		flex-grow: 1;
		min-width: 100px;
		max-width: 180px;
		border-right: 1px solid grey;
		position: fixed;
		top: 0;
		bottom: 0;
		overflow-x: hidden;
	}
	.nav .nav-container a {
		border-bottom: 1px solid grey;
		padding: 10px;
		padding-left: 8px;
		text-decoration: none;
	}
	.content {
		flex-grow: 2;
		margin-left: 210px;
	}
</style>
