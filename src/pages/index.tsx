import { useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import socketClient from 'socket.io-client';
import axios from 'axios';

import { RoomContext, RoomContextType } from '../context/rommContext';
import {
	SongBookContext,
	SongBookContextType,
} from '../context/songobookContext';
import Start from '../components/Start';
import RoomContainer from '../components/RoomContainer';

import styles from '../styles/Home.module.scss';

export default function Home() {
	const { room, setRoom, setSocket, autoplayPermission } = useContext(
		RoomContext
	) as RoomContextType;
	const { setSongBook } = useContext(SongBookContext) as SongBookContextType;

	const router = useRouter();

	useEffect(() => {
		if (typeof window) {
			if (
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				)
			) {
				router.push('/sala');
			}
			axios.get(`${process.env.apiUrl}/singer/all`).then((res) => {
				setSongBook(res.data);
			});
			const currentSocket = socketClient(`${process.env.apiUrl}/room`);
			setSocket(currentSocket);
			currentSocket.on('connect', () => {
				const previousRoomId = localStorage.getItem('roomId');
				if (previousRoomId) {
					currentSocket.emit('roomSocket', {
						action: 'reconnect',
						roomId: previousRoomId,
					});
				} else {
					currentSocket.emit('roomSocket', {
						action: 'new',
					});
				}
			});
			currentSocket.on('msgToRoom', (data) => {
				setRoom(data);
				localStorage.setItem('roomId', data._id);
			});
		}
	}, [router]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Lindokê</title>
				<meta name="description" content="Tão bonitos quanto cantores" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{room?.songs.length && autoplayPermission ? <RoomContainer /> : <Start />}
		</div>
	);
}
