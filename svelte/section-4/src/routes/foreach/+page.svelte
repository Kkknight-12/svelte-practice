<script lang="ts">
	import ForLoop from '$lib/ForEachComp/ForLoop.svelte';
	export let data;

	const title = 'For each Loop';

	let total = 0;
	for (let { arr } of data.todos) {
		total = total + arr.length;
	}
	console.log({ total });

	let totalUsers = 0;
	for (let index = 0; index < data.totalUsers.length; index++) {
		totalUsers = totalUsers + Object.keys(data.totalUsers[index]).length;
	}
	console.log({ totalUsers });
</script>

{#if data.todos}
	<ForLoop todos={data.todos} {title} />
{/if}
<input />
