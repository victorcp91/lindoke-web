import React from 'react';
import { SingerDTO } from '../../types/SingerDTO';
import styles from './SongContainer.module.scss';

type props = {
	singers: SingerDTO[];
	setCurrentSinger: (s: SingerDTO) => void;
};

function SingersContainer({ singers, setCurrentSinger }: props) {
	return (
		<ul className={styles.singersContainer}>
			{singers.map((s: any) => (
				<li key={s._id}>
					<button onClick={() => setCurrentSinger(s)}>{s.name}</button>
				</li>
			))}
		</ul>
	);
}

export default SingersContainer;
