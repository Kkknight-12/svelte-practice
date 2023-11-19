<script lang="ts">
	let inputRef: HTMLInputElement;
	let inputText: string = '';
	const handleAddTodos = () => {
		console.log(inputRef.value);
	};
</script>

<form class="add-todo-form" on:submit|preventDefault={handleAddTodos}>
	<!-- bind will allow us to grab referance to this html node -->
	<input bind:this={inputRef} on:input={(e) => (inputText = e.currentTarget.value)} />
	<button type="submit">Add</button>

	<!-- or -->
	<input bind:value={inputText} />
</form>
<h1>{inputText}</h1>

<style>
	form {
		margin-top: 50px;
	}
	.add-todo-form :not(button) {
		display: flex;
		flex-direction: column;
		max-width: 400px;
		gap: 40px;
	}
	button {
		margin-block: 20px;
	}
</style>
