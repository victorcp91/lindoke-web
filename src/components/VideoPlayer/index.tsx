import { useState, useContext, useEffect } from 'react';
import YouTube from 'react-youtube';

import {
	SongBookContext,
	SongBookContextType,
} from '../../context/songobookContext';

import { RoomContext, RoomContextType } from '../../context/rommContext';
import { QueueSongDTO } from '../../types/RoomDTO';

import styles from './VideoPlayer.module.scss';

function VideoPlayer() {
	const { songBook } = useContext(SongBookContext) as SongBookContextType;
	const { room, socket } = useContext(RoomContext) as RoomContextType;
	const [playing, setPlaying] = useState<QueueSongDTO | null>(null);
	const [alternativeVideoId, setAlternativeVideoId] = useState<string | null>(
		null
	);

	useEffect(() => {
		if (room?.songs.length) {
			setPlaying(room.songs[0]);
		}
	}, [room?.songs]);

	const endVideo = () => {
		setAlternativeVideoId(null);
		socket?.emit('roomSocket', {
			action: 'nextSong',
			roomId: room?._id,
		});
	};

	const tryAnotherVideo = async (error: any) => {
		if (error.data === 150) {
			const updatedSongbook = [...songBook];
			const singerIndex = updatedSongbook.findIndex(
				(singer) => singer.name === playing?.singer
			);
			if (playing && singerIndex !== -1) {
				const alternativeSong = updatedSongbook[singerIndex].songs.find(
					(song) =>
						song.title.toLowerCase().includes(playing.title.toLowerCase())
				);
				if (alternativeSong) {
					setAlternativeVideoId(alternativeSong.youtubeId);
				} else {
					if (socket) {
						socket.emit('roomSocket', {
							action: 'nextSong',
							roomId: room?._id,
						});
					}
				}
			}
		}
	};

	return (
		<span className={styles.container}>
			<YouTube
				videoId={alternativeVideoId || playing?.youtubeId}
				opts={{
					playerVars: {
						autoplay: 1,
						controls: 1,
						iv_load_policy: 3,
						modestbranding: 1,
						rel: 0,
						showinfo: 0,
						volume: 100,
					},
				}}
				onPlay={() => {}}
				onEnd={endVideo}
				onError={tryAnotherVideo}
			/>
			<div className={styles.blocker} />
		</span>
	);
}

export default VideoPlayer;
