<script lang="ts">
	import Todo from './Todo.svelte';
	import { v4 as uuid } from 'uuid';

	let todos = [
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
		todos = [
			...todos,
			{
				id: uuid(),
				title: event.detail.title,
				completed: false
			}
		];
	};

	const handleRemoveTodo = (event: any) => {
		todos = todos.filter((t) => t.id !== event.detail.id);
	};

	const picheDekhofun = (event: any) => {
		console.log('eeee ', event.detail);
	};
</script>

<Todo
	{todos}
	on:onaddtodo={handleAddTodo}
	on:removetodo={handleRemoveTodo}
	on:picheDekho={picheDekhofun}
/>
