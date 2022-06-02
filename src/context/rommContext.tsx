import { createContext, useState } from 'react';
import { Socket } from 'socket.io-client';
import { RoomDTO } from '../types/RoomDTO';

export type RoomContextType = {
	room: RoomDTO | null;
	setRoom: (r: RoomDTO) => void;
	socket: Socket | null;
	setSocket: (s: Socket) => void;
	autoplayPermission: boolean;
	setAutoplayPermission: (a: boolean) => void;
};

type props = {
	children: JSX.Element;
};

export const RoomContext = createContext<RoomContextType | null>(null);

export function RoomProvider({ children }: props) {
	const [room, setRoom] = useState<RoomDTO | null>(null);
	const [socket, setSocket] = useState<Socket | null>(null);
	const [autoplayPermission, setAutoplayPermission] = useState<boolean>(false);

	return (
		<RoomContext.Provider
			value={{
				setRoom,
				room,
				socket,
				setSocket,
				autoplayPermission,
				setAutoplayPermission,
			}}
		>
			{children}
		</RoomContext.Provider>
	);
}
