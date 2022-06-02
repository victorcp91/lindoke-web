import { useState, useEffect, useMemo, useRef, useContext } from 'react';
import axios from 'axios';
import styles from './SongBook.module.scss';

import { RoomContext, RoomContextType } from '../../context/rommContext';
import {
	SongBookContext,
	SongBookContextType,
} from '../../context/songobookContext';
import { UserContext, UserContextType } from '../../context/userContext';
import SingersContainer from '../SingersContainer';
import SingerSections from '../SingerSections';
import Songs from '../Songs';
import { QueueSongDTO } from '../../types/RoomDTO';

type props = {
	active: boolean;
};

function SongBook({ active }: props) {
	const { room, socket } = useContext(RoomContext) as RoomContextType;
	const { songBook, setSongBook } = useContext(
		SongBookContext
	) as SongBookContextType;
	const { user } = useContext(UserContext) as UserContextType;

	const [currentSection, setCurrentSection] = useState<string>('');
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [foundSingers, setFoundSingers] = useState<any>([]);
	const [currentSinger, setCurrentSinger] = useState<any>();

	const timer = useRef<any>();

	useEffect(() => {
		axios.get(`${process.env.apiUrl}/singer/all`).then((res) => {
			setSongBook(res.data);
		});
	}, []);

	useEffect(() => {
		clearTimeout(timer.current);
		if (searchQuery) {
			timer.current = setTimeout(() => {
				const found = songBook.filter((a: any) =>
					a.name.toLowerCase().includes(searchQuery.toLowerCase())
				);
				setFoundSingers(found);
			}, 1000);
		} else {
			setFoundSingers([]);
		}
	}, [searchQuery]);

	const filteredSingers = useMemo(() => {
		if (foundSingers.length) {
			return foundSingers;
		}
		if (currentSection) {
			return songBook.filter((a: any) => a.index === currentSection);
		}
		return [];
	}, [searchQuery, songBook, currentSection, foundSingers]);

	const backStep = () => {
		if (currentSinger) {
			setCurrentSinger(null);
			return;
		}
		if (searchQuery) {
			setSearchQuery('');
			setCurrentSection('');
			return;
		}
		if (currentSection) {
			setCurrentSection('');
		}
	};

	const singersContext = useMemo(
		() =>
			filteredSingers.length ? (
				<SingersContainer
					singers={filteredSingers}
					setCurrentSinger={setCurrentSinger}
				/>
			) : (
				<SingerSections setCurrentSection={setCurrentSection} />
			),
		[filteredSingers]
	);

	const addToSingQueue = (song: QueueSongDTO) => {
		if (socket) {
			socket.emit('userSocket', {
				action: 'addSong',
				userId: user?.uid,
				roomId: room?._id,
				song,
			});
		}
	};

	const clearSearch = () => {
		setSearchQuery('');
		setFoundSingers([]);
		setCurrentSinger('');
	};

	if (!active) {
		return null;
	}
	return (
		<>
			<header className={styles.header}>
				<button
					disabled={!currentSection && !searchQuery && !currentSinger}
					className={styles.back}
					onClick={backStep}
				>
					{'<'}
				</button>
				<input
					className={styles.search}
					placeholder=" BUSCAR CANTOR"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.currentTarget.value)}
				/>
				{searchQuery && (
					<button className={styles.clearSearch} onClick={clearSearch}>
						{'x'}
					</button>
				)}
			</header>
			{currentSinger ? (
				<Songs singer={currentSinger} addToSingQueue={addToSingQueue} />
			) : (
				singersContext
			)}
		</>
	);
}

export default SongBook;
