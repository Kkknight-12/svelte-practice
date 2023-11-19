<script lang="ts">
	import ChildComp from './ChildComp.svelte';
	$: title = '';

	const picheDekhofun = (event: any) => {
		console.log('eeee ', event.detail);
		title = event.detail.title;
	};
</script>

<ChildComp on:picheDekho={picheDekhofun} />
<h1>{title}</h1>
