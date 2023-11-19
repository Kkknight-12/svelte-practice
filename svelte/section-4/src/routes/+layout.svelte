<script>
	import '../app.css';
</script>

<div class="container">
	<nav class="nav">
		<div class="nav-container">
			<a href="/callBackfunction"> callback function </a>
			<a href="/foreach"> foreach </a>
			<a href="/bindvalue"> bind value </a>
			<a href="/updatingArrayAndObject"> updating Array And Object </a>
			<a href="/customeComponentEvents"> custome Component Events </a>
			<a href="/immutableData"> immutable data </a>
			<a href="/removingTodoEvents"> Removing Todo Events </a>
			<a href="/toggleEvents"> Toggle Events </a>
			<a href="/readOnlyProps"> Read Only Props </a>
			<a href="/componentLifeCycle"> Component lifecycle functions </a>
			<a href="/componentLifeCycleExamples"> Component lifecycle functions Exmaples</a>
			<a href="/bindingDimentions"> Binding Dimentions</a>
			<a href="/tickLifeCycle"> Tick Life Cycle</a>
			<a href="/await"> Await </a>
			<a href="/addingTodoFromAPI"> Adding Todo From API </a>
			<a href="/removingTodosFromAPI"> Removing Todo From API </a>
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
		max-height: min-content;
		overflow-y: auto;
		gap: 20px;
		font-size: 20px;
		margin-top: 20px;
	}
	.nav {
		flex-grow: 1;
		max-width: 180px;
		border-right: 1px solid black;
		position: fixed;
		top: 0;
		bottom: 0;
		overflow-x: hidden;
	}
	.nav .nav-container a {
		border-bottom: 1px solid black;
		padding: 10px;
		padding-left: 0;
		text-decoration: none;
	}
	.content {
		flex-grow: 2;
		margin-left: 210px;
	}
</style>
