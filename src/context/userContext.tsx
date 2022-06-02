import { useState, createContext } from 'react';
import { UserProfile } from '@firebase/auth';
import React from 'react';

export type UserContextType = {
	user: UserProfile | null;
	setUser: (u: UserProfile) => void;
};

type props = {
	children: JSX.Element;
};

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: props) {
	const [user, setUser] = useState<UserProfile | null>(null);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
