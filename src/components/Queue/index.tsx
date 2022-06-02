import { useContext } from 'react';
import { RoomContext, RoomContextType } from '../../context/rommContext';

import styles from './Queue.module.scss';

type props = {
	active: boolean;
};

function Queue({ active }: props) {
	const { room, socket } = useContext(RoomContext) as RoomContextType;
	if (!active) {
		return null;
	}

	const nextSong = () => {
		const confirmed = window?.confirm(
			'Tem certeza que deseja pular essa música?'
		);
		if (confirmed) {
			socket?.emit('userSocket', {
				action: 'scapeSong',
				roomId: room?._id,
			});
		}
	};

	return (
		<ul className={styles.container}>
			{room?.songs.map((s) => (
				<li key={s.youtubeId}>{s.title}</li>
			))}
			{!!room?.songs.length && (
				<li>
					<button onClick={nextSong}>Pular música</button>
				</li>
			)}
		</ul>
	);
}

export default Queue;
