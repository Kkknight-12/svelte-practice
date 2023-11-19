<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const cc = () => {
		dispatch('picheDekho', {
			title: 'dekh le bee'
		});
	};
</script>

<div class="child-container">
	<h1>Child Component</h1>

	<button type="submit" on:click={cc}>Add</button>
</div>

<style>
	.child-container {
		border: 1px solid gray;
		border-radius: 8px;
		box-shadow: 10px 10px 5px lightblue;
		padding: 10px;
	}
</style>
