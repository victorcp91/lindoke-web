import { useContext, useCallback } from 'react';

import { RoomContext, RoomContextType } from '../../context/rommContext';
import { QueueSongDTO } from '../../types/RoomDTO';
import LindokeLogo from '../../assets/lindoke.svg';

import styles from './RoomQueue.module.scss';

function RoomQueue() {
	const { room } = useContext(RoomContext) as RoomContextType;

	const getUserName = useCallback(
		(song: QueueSongDTO) => {
			const user = room?.users.find((u) => u.userId === song.userId);
			if (user) {
				return user.name;
			}
			return song.singer;
		},
		[room]
	);

	return (
		<ul className={styles.queue}>
			<div className={styles.roomInfo}>
				<LindokeLogo /> cod: {room?._id}
			</div>

			{room?.songs.map((s, index) => (
				<li key={s.youtubeId}>
					{index}.{getUserName(s)}
				</li>
			))}
		</ul>
	);
}

export default RoomQueue;
