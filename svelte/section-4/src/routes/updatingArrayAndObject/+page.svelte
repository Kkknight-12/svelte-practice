<script lang="ts">
	import ForLoop from '$lib/ForEachComp/ForLoop.svelte';
	import { v4 as uuid } from 'uuid';
	import Todos from './Todos.svelte';

	let todos = [
		{
			id: uuid(),
			title: 'Todo ',
			completed: true
		},
		{
			id: uuid(),
			title: 'Todo ',
			completed: false
		},
		{
			id: uuid(),
			title: 'Todo ',
			completed: true
		}
	];

	$: console.log({ todos });
</script>

<h1>binding props</h1>

<!-- binding value to a components ( binding components props) -->
<!--  so when ever todos inside Todos component is update, the variable in this file ( todos ) is also updated -->
<h1>{todos.length}</h1>
<Todos bind:todos />
<!-- <Todos {todos} /> -->
