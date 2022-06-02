import TSParticles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import styles from './Particles.module.scss';
import { Engine } from 'tsparticles-engine';

function Particles() {
	const particlesInit = async (main: Engine) => {
		await loadFull(main);
	};

	return (
		<div className={styles.container}>
			<TSParticles
				id="tsparticles"
				init={particlesInit}
				options={{
					background: {
						color: {
							value: 'var(--blue)',
						},
					},
					interactivity: {
						detect_on: 'canvas',
						events: {
							onhover: {
								enable: true,
								mode: 'bubble',
							},
							onclick: {
								enable: true,
								mode: 'repulse',
							},
							resize: true,
						},
						modes: {
							grab: {
								distance: 400,
								line_linked: {
									opacity: 0.5,
								},
							},
							bubble: {
								distance: 400,
								size: 4,
								duration: 0.3,
								opacity: 1,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
							push: {
								particles_nb: 4,
							},
							remove: {
								particles_nb: 2,
							},
						},
					},
					particles: {
						color: {
							value: '#ffffff',
						},
						move: {
							enable: true,
							speed: 2,
							direction: 'bottom',
							random: false,
							straight: false,
							out_mode: 'out',
							bounce: false,
							attract: {
								enable: false,
								rotateX: 600,
								rotateY: 1200,
							},
						},
						number: {
							value: 379,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						opacity: {
							value: 0.3,
							random: true,
							anim: {
								enable: false,
								speed: 1,
								opacity_min: 0.1,
								sync: false,
							},
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 0,
								color: '#000000',
							},
							polygon: {
								nb_sides: 5,
							},
						},
						size: {
							value: 15,
							random: true,
							anim: {
								enable: false,
								speed: 40,
								size_min: 0.1,
								sync: false,
							},
						},
						line_linked: {
							enable: false,
							distance: 500,
							color: '#ffffff',
							opacity: 0.4,
							width: 2,
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	);
}

export default Particles;
