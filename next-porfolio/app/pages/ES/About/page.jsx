import styles from '../../../styles/about.module.css'
import NavBar from '../../../components/NavBar/ES/NavBar'

export default function About() {
	return (
		<main className={styles.about}>
			<NavBar />
			<h1>About Es</h1>
		</main>
	)
}