<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Todo from './Todo.svelte';
	import { v4 as uuid } from 'uuid';

	let todoList: any;
	let showList = true;

	let todos: any = null;
	let error: any = null;
	let isLoading = false;
	let isAdding = false;

	onMount(() => {
		loadTodos();
	});

	async function loadTodos() {
		isLoading = true;
		await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(async (response) => {
			if (response.ok) {
				todos = await response.json();
			} else {
				error = 'An error has occurred';
			}
		});
		isLoading = false;
	}

	const handleAddTodo = async (event: any) => {
		event.preventDefault();
		isAdding = true;

		fetch('https://jsonplaceholder.typicode.com/todos', {
			method: 'POST',
			body: JSON.stringify({
				title: event.detail.title,
				completed: false
			}),
			headers: {
				'Content-type': 'application/json; chartset=UTF-8'
			}
		}).then(async (response) => {
			if (response.ok) {
				const todo = await response.json();

				todos = [...todos, { ...todo, id: uuid() }];
				todoList.clearInput();
			} else {
				alert('An error has occured.');
			}
		});

		isAdding = false;
		await tick();
		todoList.focusInput();
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
</script>

<h1>Adding Todo From API</h1>

<label
	><input type="checkbox" bind:checked={showList} />
	Show/Hide List</label
>
{#if showList}
	<div style:max-width="500px">
		<Todo
			{todos}
			{error}
			{isLoading}
			disableAdding={isAdding}
			bind:this={todoList}
			on:onaddtodo={handleAddTodo}
			on:removetodo={handleRemoveTodo}
			on:toggletodo={handleToggleTodo}
		/>
	</div>
{/if}
