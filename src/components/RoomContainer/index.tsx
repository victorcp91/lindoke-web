import RoomQueue from '../RoomQueue';
import VideoPlayer from '../VideoPlayer';

import styles from './RoomContainer.module.scss';

function RoomContainer() {
	return (
		<div className={styles.container}>
			<RoomQueue />
			<VideoPlayer />
		</div>
	);
}

export default RoomContainer;
