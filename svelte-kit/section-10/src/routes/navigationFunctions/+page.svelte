<script>
	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
	import { navigating } from '$app/stores';

	//  runs when you navigate from this page to another
	beforeNavigate((nav) => {
		console.log('before navigate ', nav);
	});

	//  runs when you navigate to this page form some other page
	afterNavigate((nav) => {
		console.log('after navigate ', nav);
	});

	// give same info that above two provide
	$: console.log('navigating ', $navigating);
</script>

<h1>Navigation Functions</h1>
<button on:click={() => goto('/')}> Go To Home Page</button>
