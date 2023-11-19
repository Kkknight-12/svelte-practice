<script lang="ts">
	import { v4 as uuid } from 'uuid';
	import ComponentEvents from './ComponentEvents.svelte';

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
		console.log('title ', event.detail.title);
	};

	$: console.log({ todos });
</script>

<ComponentEvents {todos} on:addTodo={handleAddTodo} />
