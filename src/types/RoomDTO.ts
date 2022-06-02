interface userDTO {
	userId: string;
	clientId: string;
	name: string;
}

export interface QueueSongDTO {
	youtubeId: string;
	title: string;
	singer: string;
	userId: string;
}

export interface RoomDTO {
	_id: string;
	name?: string;
	clientId?: string;
	users: userDTO[];
	songs: QueueSongDTO[];
}
