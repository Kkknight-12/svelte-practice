<script lang="ts">
	import ForLoop from '$lib/ForEachComp/ForLoop.svelte';
	import { createEventDispatcher } from 'svelte';

	export let todos: {
		id: string;
		title: string;
		completed: boolean;
	}[] = [];
	const pageTitle = 'custom component events';
	const dispatch = createEventDispatcher();

	let inputText: string = '';

	const handleAddTodo = () => {
		dispatch('addTodo', {
			title: inputText
		});
		inputText = '';
	};
</script>

<ForLoop {todos} title={pageTitle} />

<form on:submit|preventDefault={handleAddTodo}>
	<input bind:value={inputText} />
	<button type="submit" disabled={!inputText}>Add</button>
</form>
