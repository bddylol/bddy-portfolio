<script lang="ts">
	import Icon from '@iconify/svelte';

	export let language: 'LANGUAGE' | 'IDE' | 'FRAMEWORK' | 'TOOL' | 'DATABASE' | 'OS' | 'LIBRARY' =
		'LANGUAGE';
	export let text: string = 'TEXT';
</script>

<section
	class="flex flex-col p-3 gap-2 bg-midnight-500 border border-midnight-450 w-fit rounded-xl h-fit"
>
	<header class="font-bold text-md">{language}</header>
	<footer class="font-bold text-xl flex flex-wrap gap-2">{text}</footer>
</section>
