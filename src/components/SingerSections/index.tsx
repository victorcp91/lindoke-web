import React from 'react';
import styles from './SIngerSections.module.scss';

type props = {
	setCurrentSection: (s: string) => void;
};

function SingerSections({ setCurrentSection }: props) {
	const sections =
		'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';

	return (
		<ul className={styles.sectionsContainer}>
			{sections.split(' ').map((s) => (
				<li key={s}>
					<button onClick={() => setCurrentSection(s)}>{s}</button>
				</li>
			))}
		</ul>
	);
}

export default SingerSections;
