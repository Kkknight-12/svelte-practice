<!-- we will be checking if the id is integer by renaming the folder to [id - int] 
int is the file name in our params folder which is checking if the route is integer-->
<script>
	import { page } from '$app/stores';
</script>

<h1>Id page where id must be an interger</h1>
<h1>{JSON.stringify($page.params)}</h1>

<a href="/parameterMatcher/abc"> try id is string </a>
