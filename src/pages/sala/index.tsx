import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

import LindokeLogo from '../../assets/lindoke.svg';
import Particles from '../../components/Particles';

import styles from './Entrada.module.scss';

function Entrada() {
	const router = useRouter();

	const [roomCode, setRoomCode] = useState<string>('');
	const [validatedRoom, setValidatedRoom] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window) {
			if (
				!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				)
			) {
				router.push('/');
			}
		}
	}, []);

	useEffect(() => {
		if (roomCode.length < 5) {
			setValidatedRoom(false);
		} else {
			setLoading(true);
			axios
				.get(`${process.env.apiUrl}/roomCheck/${roomCode}`)
				.then((res) => {
					if (res.data) {
						setValidatedRoom(true);
					} else {
						setValidatedRoom(false);
					}
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [roomCode]);

	return (
		<div className={styles.container}>
			<Particles />
			<div className={styles.codeContainer}>
				<LindokeLogo />
				<label htmlFor="roomCode">Código da sala</label>
				<input
					id="roomCode"
					value={roomCode}
					onChange={(e) => setRoomCode(e.currentTarget.value)}
					placeholder="CODIGO"
				/>
				{validatedRoom && (
					<Link href={`/sala/${roomCode}`}>
						<a>Entrar!</a>
					</Link>
				)}
				{loading && (
					<div className={styles.loading}>
						<span>Buscando sala...</span>
					</div>
				)}
			</div>
		</div>
	);
}

export default Entrada;
