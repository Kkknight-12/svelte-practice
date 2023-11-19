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

	const handleToggleTodo = (id: string, value: boolean) => {
		dispatch('toggletodo', {
			id,
			value
		});
	};
</script>

<ul>
	{#each todos as todo (todo.id)}
		<li>
			<label>
				<input
					on:input={(event) => {
						event.currentTarget.checked = todo.completed;
						handleToggleTodo(todo.id, !todo.completed);
					}}
					type="checkbox"
					checked={todo.completed}
				/>{todo.title}
			</label>
			<button on:click={() => handleRemoveTodos(todo.id)}>Remove</button>
		</li>{/each}
</ul>

<form on:submit|preventDefault={handleAddTodo}>
	<input bind:value={inputText} />
	<button type="submit" disabled={!inputText}>Add</button>
</form>
