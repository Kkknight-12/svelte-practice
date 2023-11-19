<script lang="ts">
	import { afterUpdate, beforeUpdate, createEventDispatcher, onMount } from 'svelte';

	export let todos: any[];
	export let error: any = null;
	export let isLoading: boolean = false;
	export let disableAdding: boolean = false;
	export let disabledItems = [];

	let prevTodos = todos;
	let inputText: string = '';
	let input, listDiv, autoscroll, listDivScrollHeight;

	afterUpdate(() => {
		if (autoscroll) {
			listDiv.scrollTo(0, listDivScrollHeight);
			autoscroll = false;
		}
	});

	const dispatch = createEventDispatcher();

	$: {
		autoscroll = todos && prevTodos && todos.length > prevTodos.length;
		prevTodos = todos;
	}

	export function clearInput() {
		inputText = '';
	}

	export function focusInput() {
		input.focus();
	}

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

<div class="todo-list">
	{#if isLoading}
		<p>Loading...</p>
	{:else if error}
		<p>{error}</p>
	{:else if todos}
		<div bind:this={listDiv}>
			<div bind:offsetHeight={listDivScrollHeight}>
				{#if todos.length === 0}
					<p>No todos yet</p>
				{:else}
					<ul>
						{#each todos as todo (todo.id)}
							<li>
								<label>
									<input
										disabled={disabledItems.includes(todo.id)}
										on:input={(event) => {
											event.currentTarget.checked = todo.completed;
											handleToggleTodo(todo.id, !todo.completed);
										}}
										type="checkbox"
										checked={todo.completed}
									/>{todo.title}
								</label>
								<button
									disabled={disabledItems.includes(todo.id)}
									on:click={() => handleRemoveTodos(todo.id)}>Remove</button
								>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/if}
</div>

<!-- form -->
<form on:submit|preventDefault={handleAddTodo}>
	<input disabled={disableAdding || !todos} bind:this={input} bind:value={inputText} />
	<button type="submit" disabled={!inputText || disableAdding || !todos}>Add</button>
</form>

<!-- 38600

// coding
- 5300  - Great frontend
- 3200  - Frontend master
--------
8500

// game
- 2700  - Resident Evil 5 ( )
- 2800  - Lord of the fallen ( )
--------
5600


----------
8500 + 5600 = 14100

-----------
38600 - 14100 = 24500 -->

<style>
	.todo-list {
		max-height: 550px;
		overflow: auto;
	}

	.todo-list ul {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 30px;
	}

	.todo-list ul li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}

	.todo-list ul button {
		height: fit-content;
	}
</style>
