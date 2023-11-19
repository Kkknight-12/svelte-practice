<script lang="ts">
	import { afterUpdate, beforeUpdate, createEventDispatcher, onMount } from 'svelte';

	export let todos: {
		id: string;
		title: string;
		completed: boolean;
	}[] = [];
	let prevTodos = todos;
	let autoScroll: boolean;
	$: {
		autoScroll = prevTodos.length < todos.length;
		prevTodos = todos;
	}

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

	let listDiv: any;

	afterUpdate(() => {
		if (autoScroll) {
			listDiv.scrollTo(0, listDivScrollHeight);
		}
		autoScroll = false;
	});

	// binding component
	let listDivHeight: any;
	let listDivScrollHeight: any;
</script>

{listDivScrollHeight}
<div class="todo-list" bind:this={listDiv} bind:offsetHeight={listDivHeight}>
	<div bind:offsetHeight={listDivScrollHeight}>
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
				</li>
			{/each}
		</ul>
	</div>
</div>

<form on:submit|preventDefault={handleAddTodo}>
	<input bind:value={inputText} />
	<button type="submit" disabled={!inputText}>Add</button>
</form>

<style>
	.todo-list {
		max-height: 150px;
		overflow: auto;
	}
</style>
