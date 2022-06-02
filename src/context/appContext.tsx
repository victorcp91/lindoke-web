import { SongBookProvider } from './songobookContext';
import { RoomProvider } from './rommContext';
import { UserProvider } from './userContext';

type props = {
	children: JSX.Element;
};

function AppContext({ children }: props) {
	return (
		<UserProvider>
			<RoomProvider>
				<SongBookProvider>{children}</SongBookProvider>
			</RoomProvider>
		</UserProvider>
	);
}

export default AppContext;
