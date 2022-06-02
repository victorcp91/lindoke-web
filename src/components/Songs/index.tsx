import { useContext } from 'react';
import axios from 'axios';

import {
	SongBookContext,
	SongBookContextType,
} from '../../context/songobookContext';
import { SingerDTO } from '../../types/SingerDTO';
import styles from './Songs.module.scss';

type props = {
	singer: SingerDTO;
	addToSingQueue: (s: any) => void;
};

function Songs({ singer, addToSingQueue }: props) {
	const { songBook, setSongBook } = useContext(
		SongBookContext
	) as SongBookContextType;

	const tryToFindMoreSongs = () => {
		axios
			.get(`${process.env.apiUrl}/singer/search?q=${singer.name}`)
			.then((res) => {
				if (res.data.length) {
					const currentSingerIndex = songBook.findIndex(
						(s) => s.name === singer.name
					);
					const updatedSongBook = (songBook[currentSingerIndex].songs = [
						...songBook[currentSingerIndex].songs,
						...res.data,
					]);
					setSongBook(updatedSongBook);
				}
			});
	};

	return (
		<div className={styles.container}>
			<div className={styles.singer}>{singer.name}</div>
			<ul>
				{singer.songs
					.filter((s) => s?.title && s?.youtubeId)
					.sort((a, b) => (a.title > b.title ? 1 : -1))
					.map((s) => (
						<li key={s.youtubeId}>
							<button
								onClick={() => addToSingQueue({ ...s, singer: singer.name })}
							>
								{s.title}
							</button>
						</li>
					))}
				<li>
					<button onClick={tryToFindMoreSongs}>Procurar mais músicas</button>
				</li>
			</ul>
		</div>
	);
}

export default Songs;
