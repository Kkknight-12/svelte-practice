<script lang="ts">
	export let todos: {
		id: string;
		title: string;
		completed: boolean;
	}[] = [];
	export let title: string;
</script>

<h1>{title}</h1>
<ul>
	{#each todos as todo, index (todo.id)}
		{@const number = index + 1}
		<li>{todo.title} {number}</li>{/each}
</ul>
