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

	const handleToggleTodo = (event: any) => {
		todos = todos.map((todo) => {
			if (todo.id === event.detail.id) {
				return { ...todo, completed: event.detail.value };
			}
			return { ...todo };
		});
	};
</script>

<h1>Toggle Todo Events</h1>
<Todo
	{todos}
	on:onaddtodo={handleAddTodo}
	on:removetodo={handleRemoveTodo}
	on:toggletodo={handleToggleTodo}
/>
