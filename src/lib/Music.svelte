<script>
	import { onMount } from 'svelte';
	import io from 'socket.io-client';

	let song_title_elem;
	let song_artist_elem;

	onMount(async () => {
		const sock = io('https://now-playing-1.bddy.repl.co', {
			path: '/io'
		});

		sock.on('connect', () => {
			console.log('[music] Connected to now-playing backend server');
		});
	});
</script>

<section class="flex justify-between h-[155px] w-[155px] p-3 flex-col linear-bg">
	<header class="font-bold text-md">MUSIC</header>
	<footer class="flex flex-col">
		<span class="text-xl font-bold" bind:this={song_title_elem}>Song Name</span>
		<span bind:this={song_artist_elem}>Song Artist</span>
	</footer>
</section>

<style>
	.linear-bg {
		background: linear-gradient(
				180deg,
				rgba(22, 25, 37, 0) 0%,
				rgba(22, 25, 37, 0.3551) 30.21%,
				rgba(22, 25, 37, 0.67) 62.5%,
				rgba(22, 25, 37, 0.67) 100%
			),
			url(https://cdn.wallpapersafari.com/10/13/UTMbfl.jpg);
		border: 1px solid rgba(0, 0, 0, 0.4);
		border-radius: 8px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
