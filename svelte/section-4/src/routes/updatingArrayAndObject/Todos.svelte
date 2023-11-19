<script lang="ts">
	import ForLoop from '$lib/ForEachComp/ForLoop.svelte';
	import { v4 as uuid } from 'uuid';

	export let todos: {
		id: string;
		title: string;
		completed: boolean;
	}[] = [];
	const title = 'Updating Arrays and Objects';

	let inputText: string = '';
	const handleAddTodo = () => {
		if (!inputText) {
			return;
		}

		// assignment will only work in svelte, array methods like push will not update the array
		todos = [
			...todos,
			{
				id: uuid(),
				title: inputText,
				completed: false
			}
		];
		inputText = '';
	};
	$: console.log({ todos });
</script>

<ForLoop {todos} {title} />

<form on:submit|preventDefault={handleAddTodo}>
	<input bind:value={inputText} />
	<button type="submit" disabled={!inputText}>Add</button>
</form>
