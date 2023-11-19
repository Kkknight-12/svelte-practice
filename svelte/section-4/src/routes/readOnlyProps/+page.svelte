<script lang="ts">
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

	const handleAddTodo = (event: any) => {
		event.preventDefault();
		setTimeout(() => {
			todos = [
				...todos,
				{
					id: uuid(),
					title: event.detail.title,
					completed: false
				}
			];
			todoList.clearInput();
		}, 2000);
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

	$: console.log('todo ', todoList);
</script>

<h1>Read only props</h1>
<Todo
	{todos}
	bind:this={todoList}
	on:onaddtodo={handleAddTodo}
	on:removetodo={handleRemoveTodo}
	on:toggletodo={handleToggleTodo}
/>
<button on:click={handleFocus}>Focus Input</button>
