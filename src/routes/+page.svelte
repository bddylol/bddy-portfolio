<script>
	//@ts-nocheck

	import CodingLanguage from '$lib/CodingLanguage.svelte';
	import Music from '$lib/Music.svelte';
	import Socials from '$lib/Socials.svelte';
	import Time from '$lib/Time.svelte';
	import UserCard from '$lib/UserCard.svelte';
	import { onMount } from 'svelte';
</script>

<div class="flex items-center content-between justify-between w-3/4 gap-5">
	<div class="flex flex-col flex-wrap items-center justify-center gap-5">
		<!-- <div class="flex flex-col items-center justify-center">
			<img src="favicon.png" alt="me as my pfp" class="w-24 h-24 rounded-full" />
			<h1 class="text-2xl font-bold">Avery</h1>
			<h1 class="text-xl font-medium text-midnight-100">@bddylol</h1>
		</div> -->
		<!-- <Music /> -->
		<UserCard />
	</div>
	<div class="flex flex-wrap items-center gap-5 h-fit">
		<CodingLanguage language="LANGUAGE" text="JavaScript & TypeScript" />
		<CodingLanguage language="LANGUAGE" text="HTML & CSS" />
		<CodingLanguage language="LIBRARY" text="Tailwind CSS" />
		<CodingLanguage language="LIBRARY" text="SCSS" />
		<CodingLanguage language="LIBRARY" text="Bootstrap" />
		<CodingLanguage language="FRAMEWORK" text="Next.js" />
		<CodingLanguage language="FRAMEWORK" text="React.js" />
		<CodingLanguage language="FRAMEWORK" text="Svelte" />
		<CodingLanguage language="TOOL" text="Expo/React Native" />
		<CodingLanguage language="IDE" text="VSCode & Jetbrains" />
	</div>
</div>
