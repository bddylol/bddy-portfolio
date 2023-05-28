<script>
	import { onMount } from 'svelte';
	import './app.css';
	let x = '0px';
	let y = '0px';

	onMount(() => {
		document.addEventListener('mousemove', (e) => {
			x = e.clientX + 'px';
			y = e.clientY + 'px';
			// cursorTrail.style.left = e.clientX + 'px';
			// cursorTrail.style.top = e.clientY + 'px';
		});
	});
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>Avery's Portfolio</title>
	<meta
		name="description"
		content="View some of the technologies and coding languages Avery knows. You can also see more about him here!"
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://bddy.lol" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Avery's Portfolio" />
	<meta
		property="og:description"
		content="View some of the technologies and coding languages Avery knows. You can also see more about him here!"
	/>
	<meta property="og:image" content="preview.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="bddy.lol" />
	<meta property="twitter:url" content="https://bddy.lol" />
	<meta name="twitter:title" content="Avery's Portfolio" />
	<meta
		name="twitter:description"
		content="View some of the technologies and coding languages Avery knows. You can also see more about him here!"
	/>
	<meta name="twitter:image" content="preview.bmp" />

	<!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>

<div
	class="flex items-center justify-center w-full h-full overflow-auto bg-midnight-600 text-midnight-50"
>
	<div
		class="flex items-center justify-center w-full h-full p-5"
		style={`background: radial-gradient(25rem at ${x} ${y}, rgba(23, 39, 110, 0.15), transparent);`}
	>
		<slot />
	</div>
</div>
