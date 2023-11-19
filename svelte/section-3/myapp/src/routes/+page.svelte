<script lang="ts">
	import Button from '$lib/Button.svelte';
	import '../app.css';
</script>

<!-- button 1 -->
<!-- onClick={() => alert('agya')} -->
<Button
	on:click={() => alert('agya')}
	let:isLeftHovered
	size="small"
	shadow
	bgColor="aqua"
	textColor="red"
	disabled
>
	{#if isLeftHovered}
		left content hovered
	{:else}
		left content not hovered
	{/if}
	<div slot="left-content-text" let:x>
		{x}
	</div>
	Click
</Button>

<!-- button 2 -->
<Button size="large" bgColor="gray" textColor="orange">Button Text</Button>
