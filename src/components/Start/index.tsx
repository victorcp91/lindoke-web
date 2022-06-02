import { useContext } from 'react';
import QRCode from '../QRCode';

import { RoomContext, RoomContextType } from '../../context/rommContext';

import styles from './Start.module.scss';

function Start() {
	const { autoplayPermission, setAutoplayPermission } = useContext(
		RoomContext
	) as RoomContextType;
	return (
		<main className={styles.main}>
			<svg
				className={styles.logo}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 315 110.712219"
				version="1.1"
			>
				<defs>
					<clipPath id="clip1">
						<path d="M 50 1 L 106 1 L 106 110.710938 L 50 110.710938 Z M 50 1 " />
					</clipPath>
				</defs>
				<g id="surface1">
					<path d="M 24.210938 102.277344 C 24.660156 100.636719 23.464844 98.246094 22.71875 98.097656 C 22.417969 97.945312 22.121094 97.945312 21.820312 97.945312 C 18.386719 98.394531 14.800781 98.246094 11.367188 97.945312 C 9.722656 97.648438 9.273438 97.347656 9.574219 95.707031 C 10.617188 90.777344 11.515625 85.699219 11.8125 80.472656 C 11.964844 77.78125 12.261719 75.242188 12.410156 72.40625 C 12.410156 70.613281 12.113281 68.820312 12.410156 66.878906 C 13.15625 63.59375 13.457031 60.160156 13.90625 56.871094 C 14.652344 52.988281 14.203125 48.957031 14.652344 44.921875 C 14.949219 42.535156 14.503906 39.996094 14.949219 37.605469 C 15.398438 35.363281 15.25 29.089844 15.398438 28.792969 C 15.847656 27.597656 15.546875 26.402344 15.699219 25.207031 C 16.144531 22.519531 15.101562 19.980469 15.546875 17.441406 C 15.996094 15.199219 15.847656 7.582031 15.847656 6.539062 C 15.847656 6.238281 15.996094 5.789062 15.847656 5.492188 C 15.847656 4 15.398438 3.699219 13.90625 3.847656 C 12.261719 4 10.46875 4.148438 8.828125 3.847656 C 7.632812 3.550781 7.035156 3.699219 6.734375 5.042969 C 6.289062 6.386719 5.988281 7.882812 5.691406 9.375 C 4.792969 13.558594 4.941406 17.738281 4.347656 22.070312 C 4.046875 24.3125 4.347656 26.550781 4.046875 28.792969 C 3.597656 31.78125 3.597656 34.765625 3.449219 37.902344 C 3.300781 40.441406 3.449219 43.132812 3.152344 45.671875 C 3 47.910156 2.851562 50.152344 2.851562 52.242188 C 3 54.78125 2.554688 57.320312 2.554688 59.710938 C 2.703125 63.445312 2.253906 67.027344 1.957031 70.613281 C 1.808594 73.003906 1.808594 75.394531 1.65625 77.632812 C 1.507812 81.367188 1.359375 84.953125 0.910156 88.535156 C 0.761719 91.523438 0.613281 94.363281 0.3125 97.199219 C 0.015625 99.738281 0.015625 102.128906 0.015625 104.667969 C -0.136719 106.011719 0.910156 107.058594 1.808594 107.058594 C 8.230469 107.058594 14.503906 108.402344 21.074219 107.65625 C 21.96875 107.65625 24.359375 107.507812 24.210938 106.160156 C 24.210938 104.816406 23.914062 103.621094 24.210938 102.277344 Z M 3.152344 101.082031 C 3.898438 92.121094 4.644531 83.457031 4.941406 74.644531 C 4.941406 70.464844 5.839844 66.28125 5.691406 62.101562 C 5.691406 60.605469 5.390625 58.964844 5.691406 57.46875 C 5.988281 56.125 5.988281 54.929688 5.988281 53.585938 C 6.136719 47.3125 6.585938 40.890625 6.734375 34.617188 C 6.886719 29.539062 7.332031 24.609375 7.632812 19.679688 C 7.78125 18.785156 7.929688 18.039062 7.929688 17.140625 C 8.078125 16.84375 8.230469 16.246094 8.230469 15.949219 C 7.632812 13.855469 8.230469 11.914062 8.675781 9.972656 C 8.828125 9.824219 8.828125 9.523438 8.976562 9.375 C 9.425781 6.539062 9.425781 6.539062 12.410156 6.386719 C 13.308594 6.386719 13.605469 6.6875 13.457031 7.433594 C 13.15625 10.570312 13.308594 13.855469 12.859375 16.992188 C 12.410156 19.679688 12.410156 22.519531 12.5625 25.207031 C 12.5625 27.746094 12.261719 30.433594 12.261719 32.976562 C 12.261719 34.617188 11.664062 36.261719 11.664062 38.054688 C 11.664062 39.546875 11.515625 41.191406 11.515625 42.832031 C 11.515625 46.117188 11.214844 49.40625 11.066406 52.839844 C 11.066406 56.574219 10.320312 60.308594 9.871094 63.890625 C 9.425781 66.730469 9.425781 69.566406 9.273438 72.257812 C 8.976562 79.574219 8.230469 86.894531 6.585938 94.0625 C 6.289062 95.558594 6.4375 97.050781 6.4375 98.394531 C 6.585938 99.140625 6.886719 99.589844 7.929688 99.886719 C 10.617188 100.484375 13.308594 100.636719 15.996094 101.082031 C 17.488281 101.382812 18.984375 100.785156 20.476562 100.785156 C 21.074219 100.785156 21.371094 101.082031 21.371094 101.679688 C 21.671875 104.96875 21.222656 105.5625 17.9375 105.117188 C 13.753906 104.816406 9.722656 104.816406 5.539062 104.667969 C 3.449219 104.667969 3 104.21875 3.152344 102.128906 C 3.152344 101.679688 3.152344 101.234375 3.152344 101.082031 Z M 3.152344 101.082031 " />
					<path d="M 40.9375 25.207031 C 39.296875 25.355469 37.652344 25.207031 35.859375 25.207031 C 35.5625 25.207031 34.964844 25.355469 34.367188 25.207031 C 33.472656 25.058594 32.875 25.65625 33.023438 26.402344 C 33.023438 29.089844 32.425781 31.628906 32.277344 34.167969 C 32.277344 35.363281 32.425781 36.558594 32.277344 37.605469 C 31.828125 41.191406 31.679688 44.773438 31.679688 48.507812 C 31.679688 53.585938 31.230469 58.515625 30.933594 63.59375 C 30.933594 65.535156 31.082031 67.476562 30.78125 69.417969 C 30.183594 73.75 30.183594 78.082031 29.886719 82.414062 C 29.589844 85.699219 29.589844 89.132812 29.738281 92.570312 C 29.886719 95.707031 29.738281 98.992188 29.738281 102.128906 C 29.886719 103.324219 30.484375 103.773438 31.679688 103.773438 C 33.171875 103.921875 34.816406 104.519531 36.308594 103.324219 L 36.457031 103.324219 C 38.101562 103.175781 38.398438 102.578125 38.699219 101.082031 C 39.148438 98.695312 38.847656 96.304688 39.296875 94.0625 C 39.445312 93.464844 39.445312 90.777344 39.59375 90.328125 C 39.894531 89.285156 39.445312 88.089844 39.59375 87.492188 C 39.894531 85.996094 39.746094 85.402344 39.894531 84.503906 C 40.34375 82.113281 39.746094 79.574219 40.34375 77.1875 C 40.640625 76.589844 39.894531 71.359375 40.640625 69.269531 C 41.535156 67.328125 41.089844 64.789062 41.386719 62.546875 C 41.386719 61.503906 41.6875 60.308594 41.6875 59.261719 C 41.6875 56.574219 41.6875 53.886719 41.535156 51.195312 C 41.386719 50.152344 41.6875 48.957031 41.386719 47.910156 C 41.386719 47.460938 41.835938 38.203125 41.984375 35.960938 C 41.984375 34.320312 42.132812 30.882812 42.285156 30.285156 C 42.730469 29.089844 42.730469 28.046875 42.730469 26.851562 C 42.730469 25.65625 42.132812 25.058594 40.9375 25.207031 Z M 39.296875 29.988281 C 38.847656 36.558594 38.699219 43.28125 38.699219 49.851562 C 38.699219 56.425781 38.25 62.996094 37.503906 69.566406 C 37.207031 72.105469 37.207031 74.644531 37.054688 77.1875 C 36.757812 82.113281 36.457031 87.042969 36.160156 91.972656 C 36.011719 94.363281 35.859375 96.75 35.859375 99.140625 C 35.859375 100.484375 35.261719 101.082031 34.21875 101.382812 C 33.472656 101.679688 32.875 101.53125 32.875 100.484375 C 32.875 99.292969 32.875 98.097656 32.875 96.902344 C 32.875 94.0625 32.875 91.078125 32.875 88.238281 C 32.875 84.652344 33.171875 81.070312 33.320312 77.484375 C 33.472656 75.394531 33.769531 73.300781 33.769531 71.210938 C 33.917969 68.671875 34.070312 66.28125 34.070312 63.890625 C 34.070312 63.445312 34.21875 62.847656 34.21875 62.398438 C 34.21875 62.25 34.367188 60.160156 34.21875 59.710938 C 33.917969 58.515625 34.667969 57.171875 34.21875 55.828125 C 33.769531 54.632812 34.816406 53.289062 34.667969 52.09375 C 34.515625 50 34.964844 43.878906 34.816406 42.085938 C 34.667969 41.488281 34.964844 38.949219 35.113281 38.203125 C 35.414062 35.066406 35.414062 33.871094 35.710938 30.734375 C 35.710938 30.285156 35.710938 29.988281 35.710938 29.539062 C 35.710938 28.492188 36.160156 28.046875 37.207031 27.894531 C 39.296875 27.894531 39.296875 27.746094 39.296875 29.988281 Z M 43.03125 11.617188 C 42.582031 10.570312 41.984375 9.523438 41.089844 8.480469 C 39.894531 7.136719 38.699219 7.882812 37.503906 7.734375 C 35.261719 7.734375 33.472656 8.925781 31.976562 10.570312 C 30.78125 11.914062 29.886719 13.707031 30.183594 15.648438 C 30.632812 18.785156 33.769531 21.175781 37.207031 21.472656 C 39.296875 21.921875 41.6875 19.382812 42.730469 17.738281 C 43.925781 15.648438 43.925781 13.707031 43.03125 11.617188 Z M 39.746094 16.394531 C 39.148438 17.441406 38.550781 18.636719 37.054688 18.636719 C 35.414062 18.785156 34.367188 17.589844 33.769531 16.394531 C 33.171875 14.902344 33.769531 13.558594 34.667969 12.214844 C 35.113281 11.617188 35.710938 11.019531 36.457031 10.871094 C 37.355469 10.570312 38.550781 10.121094 38.847656 11.617188 C 38.996094 12.214844 39.746094 12.363281 40.042969 12.8125 C 40.789062 14.003906 40.34375 15.199219 39.746094 16.394531 Z M 39.746094 16.394531 " />
					<g clipPath="url(#clip1)" clipRule="nonzero">
						<path d="M 94.859375 81.816406 C 93.960938 81.367188 93.960938 80.472656 93.664062 79.875 C 91.722656 75.394531 90.078125 70.761719 88.4375 66.132812 C 85.898438 59.5625 83.207031 52.839844 81.117188 46.117188 C 80.519531 44.027344 80.070312 42.085938 79.324219 39.996094 C 77.085938 34.617188 75.441406 29.089844 73.351562 23.566406 C 72.15625 20.277344 71.257812 16.992188 69.765625 13.855469 C 68.871094 11.914062 67.824219 9.972656 67.375 7.734375 C 67.226562 6.539062 66.480469 5.34375 65.882812 4.148438 C 65.136719 2.652344 63.792969 1.90625 62.148438 1.757812 C 60.503906 1.757812 58.863281 1.757812 57.21875 1.460938 C 56.175781 1.308594 55.277344 1.609375 54.980469 2.804688 C 54.53125 3.699219 53.933594 4.597656 53.933594 5.640625 C 53.933594 8.03125 53.1875 10.121094 52.738281 12.363281 C 51.695312 19.234375 51.246094 26.253906 50.945312 33.125 C 50.648438 39.546875 50.796875 45.96875 50.796875 52.242188 C 50.648438 59.5625 51.097656 66.730469 51.246094 73.898438 C 51.394531 79.726562 51.246094 85.550781 51.394531 91.226562 C 51.695312 95.707031 51.542969 100.1875 52.589844 104.519531 C 53.636719 109.296875 52.738281 109.296875 58.863281 110.492188 C 62.597656 111.089844 63.042969 110.640625 63.042969 106.910156 C 63.195312 103.324219 62.597656 99.886719 62.597656 96.304688 C 62.449219 89.433594 62.597656 82.5625 62.148438 75.691406 C 61.550781 66.878906 62.597656 58.214844 62.148438 49.554688 C 61.699219 43.429688 62 37.304688 62 31.183594 C 62 30.585938 61.851562 29.988281 62.296875 29.539062 C 64.835938 34.917969 67.078125 40.292969 68.421875 45.96875 C 70.214844 53.734375 73.351562 61.054688 76.039062 68.523438 C 77.980469 74.050781 80.519531 79.425781 82.609375 84.953125 C 84.703125 90.480469 87.539062 95.558594 89.78125 101.082031 C 90.527344 103.023438 91.574219 104.96875 92.46875 106.910156 C 93.214844 108.402344 94.261719 109.148438 96.054688 108.851562 C 97.25 108.550781 98.445312 108.550781 99.636719 108.253906 C 103.222656 107.65625 105.464844 105.117188 105.464844 101.679688 C 105.613281 97.199219 105.464844 92.570312 105.613281 88.089844 C 105.910156 79.574219 104.417969 71.0625 104.566406 62.546875 C 104.714844 58.214844 104.269531 54.035156 104.269531 49.703125 C 104.121094 46.714844 104.417969 43.578125 104.121094 40.59375 C 103.96875 37.457031 103.96875 34.320312 103.96875 31.183594 C 103.96875 26.105469 104.269531 21.027344 103.820312 15.949219 C 103.671875 14.003906 102.476562 12.8125 100.535156 13.109375 C 98.59375 13.257812 96.652344 13.707031 94.710938 14.003906 C 93.363281 14.15625 92.769531 14.902344 92.769531 16.097656 C 92.769531 16.542969 92.769531 17.140625 92.769531 17.589844 C 93.664062 24.910156 93.8125 32.226562 93.664062 39.546875 C 93.664062 44.175781 93.515625 48.808594 93.960938 53.4375 C 94.859375 61.949219 95.457031 70.613281 95.308594 79.277344 C 95.15625 80.171875 95.457031 81.070312 94.859375 81.816406 Z M 58.5625 29.390625 C 58.5625 34.019531 58.117188 38.5 58.414062 42.832031 C 58.863281 54.484375 58.414062 65.984375 58.5625 77.632812 C 58.714844 83.609375 58.714844 89.433594 58.714844 95.40625 C 58.863281 97.648438 59.011719 99.738281 59.160156 101.980469 C 59.160156 102.875 59.3125 103.621094 59.3125 104.519531 C 59.160156 105.414062 59.609375 106.609375 58.414062 106.757812 C 57.070312 107.058594 56.621094 106.011719 56.324219 104.96875 C 55.726562 103.324219 55.425781 101.679688 55.277344 100.039062 C 55.128906 94.511719 55.128906 88.984375 54.980469 83.308594 C 54.828125 76.589844 54.828125 69.71875 54.382812 62.996094 C 53.933594 56.871094 54.082031 50.75 54.382812 44.625 C 54.382812 43.429688 54.382812 42.085938 54.382812 40.742188 C 54.234375 32.378906 54.53125 24.011719 56.023438 15.796875 C 56.472656 12.660156 57.667969 9.523438 57.367188 6.238281 C 57.21875 5.195312 57.816406 4.746094 59.011719 4.746094 C 62.597656 4.597656 62.597656 4.597656 63.941406 8.03125 C 68.570312 19.679688 72.605469 31.628906 76.488281 43.429688 C 80.667969 56.425781 85.898438 68.972656 90.378906 81.816406 C 91.574219 85.101562 92.617188 88.535156 93.664062 91.824219 C 93.960938 92.71875 94.261719 93.617188 94.859375 94.363281 C 96.203125 95.855469 97.546875 95.707031 98.144531 93.765625 C 98.59375 92.867188 98.59375 91.824219 98.59375 90.628906 C 98.445312 82.863281 99.339844 75.09375 98.59375 67.179688 C 98.445312 65.535156 98.445312 63.890625 98.292969 62.25 C 97.546875 55.675781 97.546875 49.253906 97.25 42.683594 C 97.097656 41.191406 97.546875 39.695312 97.398438 38.203125 C 97.097656 31.929688 97.398438 25.65625 96.652344 19.382812 C 96.652344 18.636719 96.5 17.738281 97.546875 17.292969 C 99.191406 16.394531 100.234375 16.992188 100.386719 18.785156 C 100.535156 21.175781 100.683594 23.414062 100.386719 25.65625 C 100.085938 29.242188 100.386719 32.824219 100.386719 36.410156 C 100.386719 44.175781 100.386719 51.945312 100.683594 59.710938 C 100.832031 66.28125 101.429688 73.003906 101.578125 79.726562 C 101.730469 86.894531 101.578125 94.0625 101.578125 101.234375 C 101.578125 103.773438 98.890625 105.863281 96.351562 105.265625 C 95.753906 105.117188 95.457031 104.667969 95.15625 104.21875 C 94.410156 102.875 93.664062 101.53125 93.066406 100.039062 C 91.722656 96.75 90.230469 93.464844 88.734375 90.328125 C 86.195312 85.101562 84.554688 79.726562 82.3125 74.496094 C 79.472656 68.222656 76.933594 61.652344 74.695312 55.082031 C 73.203125 50.152344 71.410156 45.371094 70.214844 40.292969 C 69.316406 36.859375 67.824219 33.570312 66.480469 30.285156 C 64.988281 26.550781 63.34375 22.96875 62.894531 18.933594 C 62.894531 18.488281 62.746094 18.039062 62.597656 17.589844 C 62.449219 16.84375 61.851562 16.542969 61.101562 16.394531 C 60.355469 16.246094 59.757812 16.542969 59.460938 17.292969 C 59.3125 17.890625 58.863281 18.488281 59.011719 19.085938 C 59.460938 22.519531 58.5625 25.953125 58.5625 29.390625 Z M 58.5625 29.390625 " />
					</g>
					<path d="M 144.296875 101.234375 C 144 98.394531 143.847656 95.40625 143.550781 92.570312 C 143.25 87.941406 143.402344 83.160156 143.101562 78.53125 C 142.953125 75.394531 142.953125 72.105469 142.804688 68.972656 C 142.65625 65.386719 142.804688 61.800781 143.101562 58.214844 C 143.402344 55.976562 143.550781 53.585938 143.550781 51.347656 C 143.402344 49.40625 143.101562 47.613281 143.101562 45.671875 C 143.25 43.878906 143.25 42.234375 143.25 40.441406 C 142.953125 34.917969 142.65625 29.242188 142.503906 23.714844 C 142.503906 20.578125 142.953125 17.441406 142.953125 14.304688 C 142.953125 12.660156 142.804688 11.167969 142.804688 9.523438 C 142.953125 7.433594 142.058594 6.6875 140.117188 7.136719 C 138.023438 7.582031 135.933594 7.285156 134.140625 6.539062 C 132.945312 5.941406 132.347656 6.238281 132.199219 7.433594 C 132.050781 8.328125 131.75 9.226562 131.902344 10.121094 C 132.347656 13.707031 131.601562 17.292969 131.601562 20.875 C 131.75 24.609375 131.152344 28.34375 131.304688 32.078125 C 131.304688 35.515625 131.003906 38.800781 131.304688 42.085938 C 131.75 49.554688 131.601562 56.871094 131.601562 64.191406 C 131.601562 65.683594 131.601562 67.328125 131.601562 68.820312 C 131.601562 69.121094 131.453125 69.867188 131.003906 69.566406 C 129.957031 68.820312 128.613281 69.121094 127.570312 68.972656 C 124.28125 68.375 121.144531 69.121094 118.160156 70.015625 C 115.320312 71.0625 113.976562 73.601562 112.78125 76.289062 C 111.289062 79.277344 110.242188 82.5625 111.289062 85.847656 C 112.035156 88.835938 113.230469 91.671875 115.46875 93.765625 C 116.964844 94.960938 118.757812 96.304688 120.699219 96.601562 C 124.582031 97.050781 128.613281 97.648438 132.496094 96.304688 C 133.246094 96.15625 133.542969 96.304688 133.542969 97.199219 C 133.542969 98.542969 133.84375 99.886719 133.992188 101.082031 C 134.289062 103.023438 135.335938 103.921875 137.128906 104.070312 C 138.921875 104.21875 140.710938 103.773438 142.503906 103.472656 C 144 103.175781 144.296875 102.277344 144.296875 101.234375 Z M 139.816406 101.082031 C 137.574219 101.382812 136.53125 100.1875 136.828125 97.796875 C 136.980469 96.453125 136.828125 95.109375 135.785156 93.914062 C 135.1875 93.167969 134.589844 93.167969 133.992188 93.316406 C 131.75 93.765625 129.511719 94.363281 127.269531 94.363281 C 124.433594 94.511719 121.742188 94.363281 119.355469 93.316406 C 117.710938 92.570312 116.664062 91.078125 115.917969 89.433594 C 114.722656 87.042969 113.679688 84.652344 114.277344 81.964844 C 115.171875 77.933594 116.664062 74.199219 120.699219 72.554688 C 122.640625 71.660156 124.878906 71.660156 126.972656 71.808594 C 128.613281 71.957031 130.257812 72.40625 131.902344 72.703125 C 132.496094 72.703125 133.09375 72.855469 133.84375 72.554688 C 134.589844 72.105469 134.886719 71.660156 134.738281 70.761719 C 134.441406 69.121094 134.738281 67.625 134.738281 65.984375 C 134.738281 64.339844 134.738281 62.546875 134.738281 60.90625 C 134.738281 58.8125 134.738281 56.871094 134.886719 54.929688 C 135.035156 52.539062 134.589844 50.152344 134.589844 47.761719 C 134.589844 44.625 134.589844 41.339844 134.140625 38.054688 C 133.84375 35.8125 134.441406 33.570312 134.441406 31.480469 C 134.289062 30.734375 134.441406 29.988281 134.140625 29.390625 C 133.542969 27.746094 134.589844 26.253906 134.589844 24.761719 C 134.738281 22.070312 135.035156 19.382812 134.589844 16.695312 C 134.441406 16.394531 134.589844 16.097656 134.738281 15.796875 C 135.035156 14.902344 135.1875 14.003906 135.1875 12.960938 C 134.738281 10.421875 134.738281 10.273438 137.277344 10.421875 C 137.574219 10.421875 137.875 10.421875 138.171875 10.421875 C 139.21875 10.273438 139.519531 10.71875 139.519531 11.617188 C 139.816406 14.902344 139.519531 18.1875 139.367188 21.324219 C 139.070312 25.207031 139.519531 29.089844 139.519531 32.976562 C 139.667969 37.605469 139.964844 42.382812 139.964844 47.015625 C 139.964844 50.898438 140.117188 54.929688 139.964844 58.8125 C 139.519531 63.742188 139.667969 68.820312 139.816406 73.75 C 139.816406 76.886719 140.265625 80.023438 140.117188 83.160156 C 139.964844 85.699219 140.265625 88.238281 140.265625 90.777344 C 140.414062 93.765625 140.5625 96.75 140.863281 99.738281 C 140.863281 100.636719 140.414062 100.933594 139.816406 101.082031 Z M 134.289062 80.917969 C 134.289062 79.128906 134.140625 77.335938 133.09375 75.691406 C 132.796875 75.242188 132.648438 74.945312 132.199219 74.796875 C 129.359375 73.898438 126.671875 73.75 123.835938 74.796875 C 121.296875 75.691406 119.953125 77.78125 118.757812 79.875 C 117.113281 82.710938 117.859375 86.746094 120.550781 88.535156 C 123.238281 90.179688 126.375 90.925781 129.660156 90.328125 C 130.257812 90.328125 130.855469 90.179688 131.453125 90.179688 C 132.347656 90.179688 133.542969 90.480469 133.992188 89.433594 C 134.289062 88.6875 134.589844 87.789062 134.441406 86.746094 C 134.289062 84.804688 134.289062 82.863281 134.289062 80.917969 Z M 130.40625 87.640625 C 127.867188 87.789062 125.328125 88.238281 122.9375 87.042969 C 121.144531 86.148438 121.445312 84.503906 121.296875 83.457031 C 121.296875 80.917969 123.386719 78.082031 125.628906 77.484375 C 126.972656 77.035156 128.464844 76.589844 129.957031 77.035156 C 130.40625 77.1875 130.707031 77.335938 130.707031 77.933594 C 130.707031 80.917969 130.707031 83.757812 131.003906 86.59375 C 131.152344 87.191406 131.003906 87.640625 130.40625 87.640625 Z M 130.40625 87.640625 " />
					<path d="M 213.453125 50.449219 C 213.152344 46.269531 211.359375 42.535156 209.417969 38.949219 C 206.878906 34.46875 202.847656 31.78125 198.367188 29.390625 C 193.136719 26.703125 187.761719 25.207031 181.9375 24.910156 C 176.261719 24.761719 170.585938 25.207031 165.507812 28.492188 C 161.324219 31.03125 157.738281 34.167969 155.351562 38.351562 C 151.765625 44.921875 150.273438 51.945312 151.167969 59.5625 C 151.464844 61.949219 151.914062 64.191406 152.363281 66.429688 C 153.558594 74.644531 158.335938 80.472656 164.609375 85.25 C 168.34375 88.089844 173.273438 88.6875 177.753906 89.882812 C 182.382812 91.078125 186.714844 90.925781 191.046875 88.984375 C 192.988281 88.089844 195.082031 87.492188 196.871094 86.445312 C 201.351562 83.757812 205.535156 80.917969 208.222656 76.289062 C 211.660156 70.316406 213.898438 63.742188 213.898438 56.273438 C 214.050781 54.632812 213.453125 52.539062 213.453125 50.449219 Z M 206.878906 72.855469 C 205.386719 75.839844 203.144531 78.230469 200.605469 80.472656 C 196.722656 83.90625 191.792969 85.402344 187.015625 87.34375 C 185.519531 87.941406 183.878906 87.34375 182.382812 87.191406 C 177.15625 86.445312 171.929688 85.847656 167.300781 83.160156 C 167 83.011719 166.550781 82.859375 166.105469 82.5625 C 162.070312 78.679688 158.1875 74.644531 156.546875 69.121094 C 155.351562 64.640625 154.753906 60.007812 154.753906 55.378906 C 154.601562 50.300781 155.5 45.371094 157.890625 41.039062 C 161.175781 34.917969 165.953125 30.433594 173.125 29.089844 C 177.753906 28.34375 182.382812 28.046875 187.015625 28.792969 C 190.300781 29.242188 193.585938 30.136719 197.621094 32.675781 C 198.8125 33.570312 203.296875 35.8125 204.9375 38.203125 C 208.222656 42.535156 210.015625 47.3125 210.613281 52.839844 C 211.511719 60.007812 210.015625 66.429688 206.878906 72.855469 Z M 207.179688 56.425781 C 207.625 52.988281 207.179688 49.703125 205.535156 46.566406 C 204.789062 45.371094 204.339844 44.175781 203.894531 42.980469 C 202.996094 40.890625 201.652344 39.546875 200.007812 38.203125 C 196.871094 35.515625 193.289062 33.421875 189.554688 31.78125 C 186.714844 30.585938 184.328125 30.882812 181.339844 31.03125 C 180.59375 31.03125 177.007812 31.183594 175.066406 31.480469 C 173.421875 31.628906 169.988281 32.824219 168.492188 33.722656 C 162.816406 37.605469 159.53125 42.980469 157.738281 49.40625 C 156.246094 55.230469 156.695312 60.90625 158.933594 66.582031 C 160.726562 70.761719 162.667969 74.796875 166.253906 77.78125 C 170.882812 81.816406 176.410156 83.90625 181.636719 84.355469 C 189.554688 83.609375 192.839844 83.160156 196.722656 80.621094 C 198.8125 79.128906 200.308594 77.335938 201.800781 75.394531 C 205.386719 70.761719 207.777344 65.535156 207.476562 59.5625 C 207.328125 58.515625 207.027344 57.46875 207.179688 56.425781 Z M 196.871094 76.589844 C 195.378906 78.230469 193.4375 79.425781 191.347656 79.875 C 188.210938 80.472656 185.074219 81.070312 181.9375 80.917969 C 174.019531 80.472656 168.046875 77.1875 164.3125 70.015625 C 162.667969 66.878906 161.472656 63.59375 160.875 60.160156 C 159.832031 53.734375 160.875 47.613281 164.609375 42.234375 C 165.207031 41.339844 165.804688 40.441406 166.402344 39.695312 C 168.195312 37.304688 170.4375 35.8125 173.273438 35.363281 C 174.917969 35.214844 175.960938 34.167969 179.246094 34.167969 C 182.085938 33.722656 184.921875 33.871094 187.3125 34.617188 C 191.792969 36.109375 195.675781 38.800781 199.113281 42.085938 C 200.308594 43.28125 200.90625 44.625 201.503906 46.117188 C 203.144531 50 204.191406 54.035156 203.742188 58.214844 C 204.191406 65.386719 201.503906 71.359375 196.871094 76.589844 Z M 196.871094 76.589844 " />
					<path d="M 229.433594 93.914062 C 231.078125 94.363281 231.824219 95.558594 232.71875 96.75 C 235.257812 99.886719 238.097656 102.726562 241.980469 104.070312 C 243.621094 104.667969 244.070312 104.519531 244.96875 102.875 C 245.714844 101.234375 246.460938 99.589844 247.058594 97.945312 C 247.355469 96.75 247.207031 96.304688 246.3125 95.707031 C 244.371094 94.363281 242.726562 92.570312 240.933594 91.226562 C 238.097656 89.132812 236.453125 86.296875 234.660156 83.609375 C 234.0625 82.710938 234.0625 81.964844 234.960938 81.367188 C 236.304688 80.472656 237.648438 79.574219 238.84375 78.679688 C 240.636719 77.484375 242.578125 76.4375 244.070312 74.796875 C 245.5625 73.003906 247.058594 71.210938 248.550781 69.269531 C 249.597656 67.925781 249.449219 67.179688 248.105469 65.984375 C 247.207031 65.238281 246.160156 64.488281 245.117188 63.890625 C 243.023438 62.398438 243.023438 62.398438 241.234375 64.042969 C 240.636719 64.488281 240.1875 65.085938 239.738281 65.535156 C 237.796875 67.476562 236.003906 69.417969 234.0625 71.359375 C 233.765625 71.808594 233.316406 72.257812 232.71875 72.105469 C 231.972656 71.808594 232.269531 71.0625 232.269531 70.464844 C 232.269531 65.085938 232.269531 59.5625 232.121094 54.183594 C 232.121094 51.195312 232.269531 48.210938 231.972656 45.222656 C 231.375 36.558594 231.671875 27.894531 232.570312 19.085938 C 232.867188 15.796875 233.019531 12.363281 233.167969 8.925781 C 233.316406 6.6875 232.269531 5.789062 230.03125 5.941406 C 228.984375 6.089844 228.089844 5.941406 227.191406 5.941406 C 224.503906 5.789062 223.757812 6.238281 223.757812 8.925781 C 223.757812 12.363281 223.457031 15.796875 223.308594 19.234375 C 223.011719 28.644531 222.863281 33.722656 222.863281 42.234375 C 223.011719 42.683594 223.011719 47.3125 222.863281 47.761719 C 222.710938 50.75 222.710938 53.734375 222.710938 56.273438 C 222.5625 57.769531 222.5625 59.261719 222.414062 60.753906 C 222.265625 65.535156 221.816406 70.316406 221.667969 75.09375 C 221.667969 77.484375 221.667969 80.023438 221.367188 82.414062 C 221.070312 84.804688 220.472656 92.269531 220.472656 93.765625 C 220.171875 97.648438 220.023438 99.738281 220.023438 103.773438 C 219.875 105.414062 220.621094 106.011719 221.964844 106.011719 C 223.757812 106.011719 224.804688 105.714844 226.445312 105.414062 C 228.984375 105.117188 229.285156 104.816406 229.285156 102.128906 C 229.132812 99.441406 229.132812 96.75 229.433594 93.914062 Z M 223.011719 101.53125 C 222.863281 100.785156 223.011719 96.601562 223.308594 95.40625 C 224.054688 90.925781 224.054688 86.445312 224.355469 82.113281 C 224.652344 77.78125 224.953125 73.601562 225.25 69.269531 C 225.699219 64.789062 225.847656 60.308594 225.699219 55.675781 C 225.550781 53.4375 225.550781 51.195312 225.847656 48.957031 C 226.445312 44.773438 226 40.59375 226.148438 36.410156 C 226.445312 30.433594 226.296875 24.460938 226.894531 18.488281 C 227.042969 16.394531 227.042969 14.15625 227.042969 11.914062 C 227.191406 11.316406 227.191406 10.71875 227.191406 10.121094 C 227.34375 9.523438 227.789062 9.078125 228.539062 9.226562 C 229.132812 9.226562 229.433594 9.675781 229.433594 10.273438 C 229.582031 12.214844 230.03125 14.304688 229.882812 16.246094 C 228.835938 24.910156 228.835938 33.570312 228.984375 42.234375 C 229.132812 49.105469 229.582031 55.976562 229.433594 62.847656 C 229.433594 65.238281 229.433594 67.625 229.285156 69.867188 C 228.984375 71.808594 229.433594 73.75 229.582031 75.691406 C 229.582031 77.335938 230.480469 77.78125 231.972656 77.035156 C 233.019531 76.589844 233.765625 75.839844 234.363281 74.945312 C 236.453125 72.105469 239.589844 70.015625 241.832031 67.328125 C 242.578125 66.429688 243.472656 66.28125 244.371094 67.027344 C 245.414062 67.777344 245.117188 68.671875 244.371094 69.566406 C 242.875 71.808594 241.082031 73.75 238.84375 75.242188 C 236.304688 76.886719 233.914062 78.679688 231.226562 80.023438 C 229.285156 80.917969 229.132812 81.816406 230.628906 83.457031 C 232.121094 84.953125 233.167969 86.59375 234.214844 88.386719 C 236.304688 91.824219 239.738281 93.765625 242.429688 96.453125 C 243.773438 97.648438 243.773438 98.992188 242.578125 100.335938 C 241.832031 101.234375 240.933594 100.636719 240.335938 100.1875 C 238.246094 98.542969 236.003906 96.902344 234.363281 94.808594 C 232.570312 92.570312 230.480469 90.628906 229.433594 88.089844 C 229.132812 87.640625 228.6875 87.191406 228.386719 86.894531 C 227.640625 86.445312 227.191406 86.59375 226.894531 87.34375 C 226.59375 88.238281 226.445312 88.984375 226.59375 89.882812 C 227.042969 93.464844 226.445312 97.050781 226.59375 100.636719 C 226.746094 102.128906 224.804688 103.324219 223.457031 102.726562 C 223.011719 102.425781 223.011719 101.980469 223.011719 101.53125 Z M 223.011719 101.53125 " />
					<path d="M 314.570312 48.808594 C 314.570312 48.507812 313.074219 39.84375 312.777344 39.097656 C 311.582031 35.960938 309.789062 33.125 307.699219 30.585938 C 305.90625 28.34375 303.515625 27.148438 300.828125 26.550781 C 297.394531 25.65625 293.957031 24.460938 290.222656 24.3125 C 288.429688 24.3125 286.488281 23.714844 284.695312 23.714844 C 281.558594 23.863281 278.574219 24.3125 275.4375 24.757812 C 272.597656 25.207031 270.058594 26.402344 267.667969 27.894531 C 264.980469 29.390625 262.890625 31.628906 260.800781 33.871094 C 258.109375 37.007812 256.46875 40.742188 255.421875 44.773438 C 254.675781 47.910156 254.527344 51.347656 254.078125 54.484375 C 253.628906 58.367188 253.777344 62.101562 254.226562 65.984375 C 254.375 67.925781 255.125 69.71875 255.570312 71.660156 C 256.167969 74.050781 257.214844 76.140625 258.410156 78.082031 C 260.800781 81.816406 263.785156 84.953125 267.96875 86.746094 C 272.75 88.835938 277.230469 91.226562 282.605469 90.480469 C 285.742188 90.777344 288.730469 90.03125 291.71875 89.582031 C 296.347656 88.984375 300.828125 88.238281 305.160156 86.445312 C 307.699219 85.402344 310.238281 84.207031 312.328125 82.265625 C 312.628906 81.964844 312.925781 81.667969 312.777344 81.515625 C 312.03125 80.621094 312.179688 79.277344 311.433594 78.378906 C 310.089844 76.886719 308.59375 75.691406 307.101562 74.347656 C 306.652344 73.75 305.757812 73.453125 305.011719 74.199219 C 302.320312 77.335938 298.585938 78.679688 294.855469 79.875 C 289.773438 81.816406 284.398438 81.964844 279.019531 81.21875 C 273.941406 80.621094 269.613281 78.230469 267.074219 73.75 C 264.382812 69.121094 263.636719 63.890625 264.535156 58.515625 C 264.832031 55.828125 264.980469 55.378906 267.820312 55.828125 C 268.117188 55.828125 268.417969 55.828125 268.714844 55.828125 C 272 55.675781 275.4375 55.378906 278.871094 55.527344 C 281.410156 55.527344 283.949219 55.828125 286.488281 55.527344 C 288.429688 55.378906 290.523438 54.78125 292.316406 54.929688 C 295.300781 55.082031 298.140625 54.332031 301.125 54.632812 C 303.367188 54.78125 305.757812 54.332031 307.996094 54.332031 C 309.9375 54.332031 311.730469 53.886719 313.523438 53.4375 C 315.167969 52.988281 315.316406 51.046875 314.570312 48.808594 Z M 311.730469 51.195312 C 311.132812 51.644531 309.9375 51.347656 309.191406 51.347656 C 305.90625 51.496094 302.769531 51.644531 299.484375 51.792969 C 297.242188 51.792969 295.003906 52.390625 292.910156 52.390625 C 290.523438 52.539062 288.28125 53.136719 285.890625 52.839844 C 284.847656 52.691406 283.949219 53.136719 282.90625 52.988281 C 280.066406 52.691406 277.378906 53.136719 274.539062 52.839844 C 273.34375 52.691406 272.300781 53.136719 271.105469 53.289062 C 269.015625 53.734375 266.921875 53.136719 264.832031 53.4375 C 263.1875 53.734375 262.441406 54.183594 261.996094 55.828125 C 261.097656 58.8125 260.949219 61.949219 261.246094 65.085938 C 261.546875 68.523438 262.441406 71.660156 263.9375 74.644531 C 265.128906 77.035156 267.074219 78.378906 268.863281 80.171875 C 271.253906 82.265625 274.242188 83.308594 277.378906 83.90625 C 279.019531 84.355469 280.8125 84.804688 282.753906 84.804688 C 283.949219 84.652344 285.144531 84.355469 286.339844 84.355469 C 288.28125 84.207031 290.222656 83.90625 292.164062 83.757812 C 296.347656 83.160156 299.78125 81.070312 303.367188 79.128906 C 304.261719 78.53125 305.609375 78.378906 306.355469 77.484375 C 306.503906 77.1875 306.953125 77.484375 307.101562 77.632812 C 307.398438 77.933594 307.699219 78.230469 307.996094 78.53125 C 309.492188 80.472656 309.339844 81.070312 307.101562 82.113281 C 303.816406 83.609375 300.53125 85.101562 296.945312 85.550781 C 292.613281 86.148438 288.429688 87.042969 284.25 87.492188 C 279.769531 87.789062 275.585938 86.894531 271.703125 85.101562 C 266.773438 83.011719 262.742188 79.875 260.203125 74.945312 C 258.707031 71.957031 257.8125 68.671875 257.511719 65.386719 C 257.214844 63.742188 257.214844 62.101562 257.214844 60.308594 C 257.363281 55.675781 257.511719 50.898438 258.558594 46.269531 C 259.304688 43.28125 260.203125 40.292969 261.996094 37.902344 C 263.785156 35.363281 266.027344 33.421875 268.566406 31.628906 C 273.941406 27.746094 279.917969 27.148438 286.339844 27.449219 C 291.269531 27.597656 295.898438 28.644531 300.679688 29.988281 C 303.515625 30.734375 305.757812 32.527344 307.550781 34.917969 C 310.535156 39.097656 311.582031 43.730469 311.730469 48.808594 C 311.730469 49.554688 312.476562 50.75 311.730469 51.195312 Z M 307.25 41.9375 C 306.503906 38.648438 304.859375 36.109375 301.875 34.320312 C 300.53125 33.722656 299.335938 33.125 297.992188 32.378906 C 294.855469 30.585938 291.417969 30.136719 287.832031 29.988281 C 284.546875 29.988281 281.410156 31.628906 278.125 32.226562 C 276.035156 32.527344 273.941406 33.421875 272.152344 34.917969 C 270.804688 35.960938 269.015625 36.558594 267.820312 38.054688 C 266.773438 39.398438 266.175781 41.039062 265.128906 42.382812 C 263.785156 44.476562 262.890625 46.714844 262.890625 49.253906 C 262.890625 50.300781 263.488281 51.046875 264.234375 51.046875 C 265.128906 51.046875 265.878906 51.046875 266.625 50.75 C 269.910156 49.554688 273.34375 49.851562 276.78125 49.851562 C 280.8125 49.703125 284.996094 49.703125 289.027344 48.507812 C 289.625 48.210938 290.371094 48.058594 290.96875 48.058594 C 293.957031 47.910156 296.945312 48.058594 299.335938 48.058594 C 302.171875 48.507812 304.261719 48.058594 306.503906 47.910156 C 307.25 47.910156 307.996094 47.460938 307.699219 46.417969 C 307.398438 45.96875 307.550781 42.683594 307.25 41.9375 Z M 304.414062 45.074219 C 302.917969 45.074219 301.574219 45.371094 300.082031 45.222656 C 299.035156 45.371094 297.992188 45.074219 296.945312 45.074219 C 293.808594 44.625 290.671875 45.074219 287.535156 45.671875 C 285.144531 46.269531 282.753906 46.566406 280.367188 46.714844 C 275.882812 47.164062 271.402344 47.015625 266.921875 47.613281 C 266.027344 47.761719 266.027344 47.3125 266.324219 46.714844 C 267.074219 45.222656 267.667969 43.730469 268.714844 42.382812 C 269.164062 41.636719 269.613281 40.742188 270.058594 39.996094 C 271.253906 38.054688 273.195312 37.457031 274.988281 36.410156 C 277.378906 35.066406 280.066406 34.46875 282.753906 34.019531 C 284.25 33.722656 285.59375 32.976562 287.234375 32.976562 C 293.359375 33.125 298.4375 35.363281 302.769531 39.398438 C 304.261719 40.742188 304.414062 42.683594 305.160156 44.476562 C 305.308594 45.074219 304.859375 45.074219 304.414062 45.074219 Z M 267.820312 14.453125 C 267.96875 14.453125 267.96875 14.753906 267.96875 15.050781 C 269.015625 16.542969 270.210938 17.738281 271.851562 18.488281 C 272.597656 18.933594 272.898438 18.335938 273.34375 17.890625 C 274.839844 16.394531 276.78125 15.351562 278.722656 14.15625 C 279.617188 13.558594 280.8125 13.257812 281.710938 12.511719 C 284.546875 10.273438 284.546875 10.273438 287.535156 12.511719 C 290.222656 14.453125 292.761719 16.394531 294.554688 19.085938 C 294.855469 19.679688 295.300781 19.980469 295.898438 20.429688 C 296.945312 21.175781 297.839844 21.175781 298.585938 20.128906 C 299.632812 18.933594 300.378906 17.589844 301.722656 16.84375 C 302.472656 16.246094 302.171875 15.648438 301.574219 15.050781 C 300.976562 14.304688 300.082031 13.855469 299.335938 13.109375 C 295.75 8.925781 291.867188 5.042969 287.832031 1.160156 C 286.339844 -0.332031 285.742188 -0.332031 283.949219 0.863281 C 282.308594 2.058594 280.664062 3.25 278.871094 4.296875 C 275.289062 6.6875 272.300781 9.675781 268.863281 12.363281 C 268.265625 12.8125 267.96875 13.410156 267.820312 14.453125 Z M 271.703125 14.304688 C 271.703125 13.855469 272.152344 13.558594 272.597656 13.257812 C 275.4375 10.71875 278.273438 8.179688 281.410156 6.238281 C 281.859375 5.941406 282.308594 5.640625 282.753906 5.34375 C 285.890625 3.101562 285.890625 3.101562 288.582031 5.789062 C 291.269531 8.480469 294.105469 11.316406 296.796875 14.15625 C 297.242188 14.601562 297.691406 15.050781 297.992188 15.5 C 298.4375 16.097656 297.992188 16.542969 297.542969 16.992188 C 297.09375 17.441406 296.644531 17.292969 296.199219 16.84375 C 295.898438 16.542969 295.601562 16.246094 295.449219 15.949219 C 293.0625 13.109375 289.925781 11.019531 287.085938 8.777344 C 284.695312 6.984375 283.949219 6.984375 281.710938 8.777344 C 279.019531 11.019531 275.734375 12.511719 273.046875 14.753906 C 272.597656 15.050781 272.152344 15.050781 271.851562 14.753906 C 271.703125 14.753906 271.703125 14.453125 271.703125 14.304688 Z M 271.703125 14.304688 " />
				</g>
			</svg>
			<section className={styles.start}>
				<QRCode />
			</section>
			{!autoplayPermission && (
				<button
					onClick={() => setAutoplayPermission(true)}
					className={styles.openRoom}
				>
					Abrir Sala
				</button>
			)}
		</main>
	);
}

export default Start;
