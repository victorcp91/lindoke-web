export interface SongDTO {
	youtubeId: string;
	title: string;
}

export interface SingerDTO {
	id?: string;
	index: string;
	name: string;
	genre?: string;
	songs: SongDTO[];
}
