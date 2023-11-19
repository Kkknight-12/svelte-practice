<script lang="ts">
	import { tick } from 'svelte';
	import Todo from './Todo.svelte';
	import { v4 as uuid } from 'uuid';

	let todos: {
		id: string;
		title: string;
		completed: boolean;
	}[] = [
		{
			id: uuid(),
			title: 'Todo ',
			completed: true
		},
		{
			id: uuid(),
			title: 'Todo ',
			completed: false
		},
		{
			id: uuid(),
			title: 'Todo ',
			completed: true
		}
	];

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

	let todoList: any;
	const handleFocus = () => {
		todoList.handleInputFocus();
	};

	// life Cycle of components
	let showList = true;
</script>

<h1>Tick Life Cycle</h1>

<label
	><input type="checkbox" bind:checked={showList} />
	Show/Hide List</label
>
{#if showList}
	<div style:max-width="300px">
		<Todo
			{todos}
			bind:this={todoList}
			on:onaddtodo={handleAddTodo}
			on:removetodo={handleRemoveTodo}
			on:toggletodo={handleToggleTodo}
		/>
	</div>
{/if}
<button on:click={handleFocus}>Focus Input</button>
