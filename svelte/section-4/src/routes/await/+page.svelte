<script lang="ts">
	import { tick } from 'svelte';
	import Todo from './Todo.svelte';
	import { v4 as uuid } from 'uuid';

	const handleAddTodo = async (event: any) => {
		console.log('before ', document.querySelectorAll('.todo-list ul li'));
		todos = [
			...todos,
			{
				id: uuid(),
				title: event.detail.title,
				completed: false
			}
		];
		await tick();
		console.log('after ', document.querySelectorAll('.todo-list ul li'));
	};

	const handleRemoveTodo = (event: any) => {
		todos = todos.filter((t) => t.id !== event.detail.id);
	};

	const handleToggleTodo = (event: any) => {
		todos = todos.map((todo) => {
			if (todo.id === event.detail.id) {
				return { ...todo, completed: event.detail.value };
			}
			return { ...todo };
		});
	};

	let showList = true;

	// await
	let promise = loadTodos();

	function loadTodos() {
		return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('An error has occurred');
			}
		});
	}
</script>

<h1>Tick Life Cycle</h1>

<label
	><input type="checkbox" bind:checked={showList} />
	Show/Hide List</label
>
{#if showList}
	<!-- {#await loadTodos() then todos} -->
	{#await promise}
		<p>Loading...</p>
	{:then todos}
		<div style:max-width="300px">
			<Todo
				{todos}
				on:onaddtodo={handleAddTodo}
				on:removetodo={handleRemoveTodo}
				on:toggletodo={handleToggleTodo}
			/>
		</div>
	{:catch error}
		<p>{error.message || 'Errorr'}</p>
	{/await}
	<button on:click={() => (promise = loadTodos())}>Refresh</button>
{/if}
