import { useContext } from 'react';
import ReactQRCode from 'react-qr-code';

import { RoomContext, RoomContextType } from '../../context/rommContext';

import styles from './QRCode.module.scss';

function QRCode() {
	const { room } = useContext(RoomContext) as RoomContextType;

	if (!room?._id) {
		return null;
	}
	return (
		<div className={styles.qrContainer}>
			<ReactQRCode
				value={`${process.env.appUrl}/sala/${room._id}`}
				bgColor="#005F86"
				fgColor="#f6be00"
			/>
			<h2 className={styles.code}>Código: {room._id}</h2>
			<strong>Conecte algum smartphone para adicionar músicas</strong>
		</div>
	);
}

export default QRCode;
