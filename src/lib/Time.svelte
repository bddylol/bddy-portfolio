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

<span class="text-xl font-bold">{time}</span>
