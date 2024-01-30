<script>
	import './app.css';
	import CursorProvider from '$lib/providers/CursorProvider.svelte';
	import Seo from '$lib/providers/SEO.svelte';
</script>

<Seo />

<div class="flex items-center justify-center w-full h-full overflow-auto text-midnight-50">
	<CursorProvider>
		<slot />
	</CursorProvider>
</div>
