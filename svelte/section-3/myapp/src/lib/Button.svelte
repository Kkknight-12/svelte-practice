<script lang="ts">
	export let size: string;
	export let shadow: boolean = false;
	export let bgColor: string;
	export let textColor: string;
	// export let onClick: any;

	console.log($$slots);
	let isLeftHovered: boolean;
</script>

<!-- style="background-color: {bgColor}; color: {textColor}" -->
<!-- style:background-color={bgColor} -->
<!-- on:click={onClick} -->
<button
	on:click
	style:--buttonBgColor={bgColor}
	style:color={textColor}
	class:size-lg={size === 'large'}
	class:size-small={size === 'small'}
	class:has-left={$$slots['left-content-text']}
	class:shadow
	{...$$restProps}
>
	<!-- checking if the left slot is present -->
	{#if $$slots['left-content-text']}
		<div
			class="left-content"
			on:mouseenter={() => (isLeftHovered = true)}
			on:mouseleave={() => (isLeftHovered = false)}
		>
			<slot name="left-content-text" x="yyyy" />
		</div>
	{/if}

	<slot {isLeftHovered}>Fallback text</slot>
</button>

<style lang="scss">
	/* @use '../styles/variables.scss'; */
	button {
		border: none;
		/* background-color: #ff3e00; */
		background-color: var(--buttonBgColor);
		color: #ffffff;
		padding: 15px 20px;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		/* &:hover {
			background: variables.$color;
		} */
		&.size-sm {
			padding: 15px 20px;
		}
		&.size-lg {
			padding: 20px 25px;
			font-size: 20px;
		}
		&.shadow {
			box-shadow: 0 3px 10px rgb(0 0 0 / 1.2);
		}
		&.has-left {
			border: 5px solid red;
		}
		/*  */
		display: flex;
		align-items: center;
		gap: 20px;
	}
</style>
