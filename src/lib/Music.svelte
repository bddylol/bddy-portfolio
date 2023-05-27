<script lang="ts">
	import { onMount } from 'svelte';
	import io from 'socket.io-client';

	let song_title_elem: HTMLSpanElement;
	let song_artist_elem: HTMLSpanElement;
	let song_album_cover: string;

	type ListeningData = {
		device: string;
		trackName: string;
		trackUrl: string;
		trackProgress: number;
		trackDuration: number;
		albumName: string;
		artistName: string;
		artistUrl: string;
		albumImageUrl: string;
		albumUrl: string;
		playing: boolean;
	};

	onMount(async () => {
		const sock = io('https://now-playing-1.bddy.repl.co', {
			path: '/io'
		});

		sock.on('connect', () => {
			console.log('[music] Connected to now-playing backend server');
		});

		sock.on('update', (data: string) => {
			let ld: ListeningData = JSON.parse(data);
			song_title_elem.innerText = ld.trackName;
			song_artist_elem.innerText = ld.artistName;
			song_album_cover = ld.albumImageUrl;
		});
	});
</script>

<section
	class="flex justify-between h-[155px] w-[155px] p-3 flex-col linear-bg"
	style={`background: linear-gradient(
		180deg,
		rgba(22, 25, 37, 0) 0%,
		rgba(22, 25, 37, 0.3551) 30.21%,
		rgba(22, 25, 37, 0.67) 62.5%,
		rgba(22, 25, 37, 0.67) 100%
	),
	url(${song_album_cover});		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;`}
>
	<header class="font-bold text-md" />
	<footer class="flex flex-col">
		<span class="text-xl font-bold" bind:this={song_title_elem}>Not Listening</span>
		<span bind:this={song_artist_elem}>N/A</span>
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
		);
		border: 1px solid rgba(0, 0, 0, 0.4);
		border-radius: 8px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
