import { createContext, useState } from 'react';
import { SingerDTO } from '../types/SingerDTO';

export type SongBookContextType = {
	songBook: SingerDTO[];
	setSongBook: (r: SingerDTO[]) => void;
};

type props = {
	children: JSX.Element;
};

export const SongBookContext = createContext<SongBookContextType | null>(null);

export function SongBookProvider({ children }: props) {
	const [songBook, setSongBook] = useState<SingerDTO[]>([]);

	return (
		<SongBookContext.Provider value={{ songBook, setSongBook }}>
			{children}
		</SongBookContext.Provider>
	);
}
