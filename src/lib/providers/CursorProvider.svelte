<script>
	import { onMount } from 'svelte';

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

<div
	class="flex items-center justify-center w-full h-full p-5"
	style={`background: radial-gradient(25rem at ${x} ${y}, rgba(204, 131, 131, 0.15), transparent);`}
>
	<slot />
</div>
