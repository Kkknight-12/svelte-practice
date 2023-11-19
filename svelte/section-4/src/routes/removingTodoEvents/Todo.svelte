<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let todos: {
		id: string;
		title: string;
		completed: boolean;
	}[] = [];

	let inputText: string = '';
	const dispatch = createEventDispatcher();

	const handleRemoveTodos = (id: string) => {
		dispatch('removetodo', {
			id
		});
	};

	const handleAddTodo = () => {
		cc();
		const isNotCancelled = dispatch(
			'onaddtodo',
			{
				title: inputText
			},
			{ cancelable: true }
		);
		if (isNotCancelled) {
			inputText = '';
		}
	};

	const cc = () => {
		dispatch('picheDekho', {
			detail: 'dekh le bee'
		});
	};
</script>

<h1>Removing Todo Events</h1>
<ul>
	{#each todos as todo, index (todo.id)}
		<li>
			<label>
				<input type="checkbox" checked={todo.completed} />{todo.title}
			</label>
			<button on:click={() => handleRemoveTodos(todo.id)}>Remove</button>
		</li>{/each}
</ul>

<form on:submit|preventDefault={handleAddTodo}>
	<input bind:value={inputText} />
	<button type="submit" disabled={!inputText}>Add</button>
</form>
