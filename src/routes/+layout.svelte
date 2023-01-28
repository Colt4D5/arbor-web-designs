<script>
	import '@picocss/pico/css/pico.min.css';
	import '../app.postcss';
</script>

<header class="container">
	<nav>
		<ul><li><strong>Title</strong></li></ul>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/">Home</a></li>
			<li><a href="/">Home</a></li>
			<li><a href="/">Home</a></li>
		</ul>
	</nav>
</header>
<main class="container">
	<slot />
</main>
<footer class="container">Footer</footer>
