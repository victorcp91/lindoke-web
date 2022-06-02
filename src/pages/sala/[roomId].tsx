import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import socketClient from 'socket.io-client';

import { RoomContext, RoomContextType } from '../../context/rommContext';
import { UserContext, UserContextType } from '../../context/userContext';
import SongBook from '../../components/SongBook';
import Queue from '../../components/Queue';
import { authAnonymousUser, changeUserName } from '../../utils/firebaseUser';
import LindokeLogo from '../../assets/lindoke.svg';

import styles from './Room.module.scss';

export default function Home() {
	const { setRoom, setSocket } = useContext(RoomContext) as RoomContextType;
	const { user, setUser } = useContext(UserContext) as UserContextType;

	const [name, setName] = useState<string>('');
	const [activeTab, setActiveTab] = useState<
		'songbook' | 'queue' | 'favorites'
	>('songbook');

	const router = useRouter();
	const { roomId } = router.query;

	const authUser = async () => {
		const currentUser = await authAnonymousUser();
		setUser(currentUser);
	};

	const setUsername = async () => {
		const currentUser = await changeUserName(name);
		if (currentUser) {
			setUser(currentUser);
		}
	};

	const enterRoom = () => {
		const currentSocket = socketClient(`${process.env.apiUrl}/room`);
		setSocket(currentSocket);
		if (user) {
			currentSocket.on('connect', () => {
				if (roomId) {
					currentSocket.emit('userSocket', {
						action: 'enter',
						roomId: roomId,
						userId: user?.uid,
						displayName: user?.displayName,
					});
				}
			});
			currentSocket.on('msgToUser', (data) => {
				setRoom(data);
			});
		}
	};

	useEffect(() => {
		authUser();
	}, []);

	useEffect(() => {
		if (user?.displayName) {
			enterRoom();
		}
	}, [user]);

	useEffect(() => {
		if (typeof window && roomId) {
			if (
				!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				)
			) {
				router.push('/');
			}
		}
	}, []);

	if (!user) {
		return <div className={styles.loadingContainer}>Carregando...</div>;
	}

	if (!user.displayName) {
		return (
			<div className={styles.nameContainer}>
				<LindokeLogo />
				<label htmlFor="userName">Diga seu nome para começar:</label>
				<input
					id="userName"
					value={name}
					onChange={(e) => setName(e.currentTarget.value)}
					placeholder="Seu nome"
				/>
				<button onClick={setUsername}>Começar!</button>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Sala {roomId}</title>
				<meta name="description" content="Tão bonitos quanto cantores" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<LindokeLogo />
				<Link href="/sala">
					<a title="sair da sala">Sair</a>
				</Link>
			</header>
			<div className={styles.tabs}>
				<span className={`${styles.tabMarker} ${styles[activeTab]}`} />
				<button
					className={`${styles.tab} ${
						activeTab === 'songbook' && styles.active
					}`}
					onClick={() => setActiveTab('songbook')}
				>
					MÚSICAS
				</button>
				<button
					className={`${styles.tab} ${activeTab === 'queue' && styles.active}`}
					onClick={() => setActiveTab('queue')}
				>
					FILA
				</button>
				{/* <button
					className={`${styles.tab} ${
						activeTab === 'favorites' && styles.active
					}`}
					onClick={() => setActiveTab('favorites')}
				>
					FAVORITOS
				</button> */}
			</div>
			<SongBook active={activeTab === 'songbook'} />
			<Queue active={activeTab === 'queue'} />
		</div>
	);
}
