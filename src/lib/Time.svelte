<script lang="ts">
	let time: any;

	function updateTime() {
		time = new Date().toLocaleTimeString('en-US', {
			timeZone: 'America/New_York',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true
		});
	}

	updateTime();
</script>

<section
	class="card-woo flex flex-col flex-grow gap-2 p-3 border bg-midnight-500 border-midnight-450 hover:bg-midnight-450 w-fit rounded-xl h-fit hover:scale-[1.3] select-none transition-all duration-[325ms]"
>
	<header class="font-bold text-md">MY TIME (EST)</header>
	<footer class="text-xl font-bold">{time}</footer>
</section>
