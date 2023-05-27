<script>
import CodingLanguage from '../lib/CodingLanguage.svelte';
	import Music from '../lib/Music.svelte';
	import Socials from '../lib/Socials.svelte';
	import Time from '../lib/Time.svelte';
</script>

<div class="flex gap-5 justify-between content-between">
	<div class="flex flex-wrap gap-5 flex-col">
		<Music />
	</div>
	<div class="flex flex-wrap gap-5 items-center ">
		<Time />
		<Socials />
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
