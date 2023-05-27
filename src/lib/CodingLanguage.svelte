<script lang="ts">
	import Icon from '@iconify/svelte';

	export let language: 'LANGUAGE' | 'IDE' | 'FRAMEWORK' | 'TOOL' | 'DATABASE' | 'OS' | 'LIBRARY' =
		'LANGUAGE';
	export let text: string = 'TEXT';
</script>

<section
	class="card-woo flex flex-col flex-grow gap-2 p-3 border bg-midnight-500 border-midnight-450 hover:bg-midnight-450 w-fit rounded-xl h-fit hover:scale-[1.3] select-none transition-all duration-[325ms]"
>
	<header class="font-bold text-md">{language}</header>
	<footer class="flex flex-wrap gap-2 text-xl font-bold">{text}</footer>
</section>
