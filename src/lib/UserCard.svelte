<script lang="ts">
	import Icon from '@iconify/svelte';

	let time: string;

	function updateTime() {
		time = new Date().toLocaleTimeString('en-US', {
			timeZone: 'America/New_York',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true
		});
	}

	updateTime();

	import io from 'socket.io-client';
	import { onMount } from 'svelte';

	let track_name: string;
	let track_artist: string;
	let song_album_cover: string;
	let track_progress: string;
	let track_duration: string;

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

		function secondsToMinutes(seconds: number) {
			let minutes = Math.floor(seconds / 60); // get the number of whole minutes
			let leftoverSeconds = seconds % 60; // get the remaining seconds
			if (leftoverSeconds >= 10) {
				return minutes + ':' + leftoverSeconds;
			} else {
				return minutes + ':' + leftoverSeconds + '0';
			}
		}

		sock.on('update', (data: string) => {
			let ld: ListeningData = JSON.parse(data);
			track_name = ld.trackName;
			track_artist = ld.artistName;
			song_album_cover = ld.albumImageUrl;
			track_progress = secondsToMinutes(ld.trackProgress);
			track_duration = secondsToMinutes(ld.trackDuration);
			console.log(ld.trackName);
		});
	});
</script>

<section class="w-[245px] bg-midnight-450 rounded-xl scale-125 mr-16">
	<header class="w-full h-16 bg-green-700 rounded-t-md" />
	<div class="relative p-3 h-fit">
		<div class="top-[-50px] relative flex flex-row justify-between">
			<img
				src="favicon.png"
				alt="me as my pfp"
				class="w-16 h-16 rounded-full border-[2px] border-midnight-400"
			/>
			<div class="flex flex-row items-end justify-end w-full gap-2">
				<a href="https://twitter.com/bddylol" class="p-1 rounded-md bg-midnight-500"
					><Icon width={16} icon="mdi:twitter" color="#fff" /></a
				>
				<a href="https://github.com/buddy-codes" class="p-1 rounded-md bg-midnight-500"
					><Icon width={16} icon="mdi:github" color="#fff" /></a
				>
				<a href="mailto:contact@bddy.lol" class="p-1 rounded-md bg-midnight-500"
					><Icon width={16} icon="mdi:email" color="#fff" /></a
				>
				<a href="https://replit.com/@bddy" class="p-1 rounded-md bg-midnight-500"
					><Icon width={16} icon="simple-icons:replit" color="#fff" /></a
				>
			</div>
		</div>
		<div class="p-2 rounded-md bg-midnight-500 mt-[-35px] gap-2 flex flex-col">
			<div class="pb-2 text-xl font-semibold border-b border-midnight-450">
				bddy<span class="text-midnight-100">#5683</span>
			</div>
			<div class="flex flex-col w-full gap-1">
				<span class="text-[0.7rem] font-bold">MY TIME (EST)</span>
				<span class="text-[0.8rem] text-midnight-100">{time}</span>
			</div>
			{#if track_name}
				<div class="flex flex-col w-full gap-1">
					<span class="text-[0.7rem] font-bold">LISTENING TO SPOTIFY</span>
					<div class="flex flex-row items-center gap-2">
						<img
							src={song_album_cover}
							alt="album cover"
							class="w-16 h-16 border rounded-md border-midnight-400"
						/>
						<div class="flex flex-col">
							<span class="text-[0.9rem] font-semibold text-midnight-100">
								{track_name}
							</span>
							<span class="text-[0.8rem] text-midnight-200">
								{track_artist}
							</span>
							<!-- <div class="flex flex-col w-full gap-0 mt-2">
				<div class="w-full h-1 bg-white rounded-full" />
				<div class="justify-between flex flex-row w-full text-[0.8rem]">
					<span>{track_progress}</span>
					<span>{track_duration}</span>
				</div>
			</div> -->
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
