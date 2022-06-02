import { UserProfile } from '@firebase/auth';
import { getAuth, signInAnonymously, updateProfile } from 'firebase/auth';

export const authAnonymousUser = async () => {
	const auth = getAuth();
	return await signInAnonymously(auth).then(async (res) => {
		return { ...res.user };
	});
};

export const changeUserName = async (displayName: string) => {
	const auth = getAuth();
	if (auth.currentUser) {
		try {
			await updateProfile(auth.currentUser, {
				displayName,
			});
			const currentUser: UserProfile = {
				...auth.currentUser,
				displayName,
			};
			return currentUser;
		} catch (error) {
			throw error;
		}
	}
	return null;
};
