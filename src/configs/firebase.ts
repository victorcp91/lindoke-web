import { initializeApp, getApps } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyCybv7_u7FFp0AdPT43hPZmLjfGweOJK0Y',
	authDomain: 'lindoke-9427d.firebaseapp.com',
	databaseURL: 'https://lindoke-9427d.firebaseio.com',
	projectId: 'lindoke-9427d',
	storageBucket: 'lindoke-9427d.appspot.com',
	messagingSenderId: '386449869236',
	appId: '1:386449869236:web:0b53a7865ae2d9303fcae1',
	measurementId: 'G-DD6HTSEF9M',
};

if (!getApps().length) {
	const app = initializeApp(firebaseConfig);
	// getAnalytics(app);
}
