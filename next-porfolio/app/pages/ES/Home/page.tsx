import styles from '../../../styles/home.module.css'
import NavBar from '../../../components/NavBar/ES/NavBar'

export default function Home() {
	return (
		<main className={styles.home}>
			<NavBar />
			<h1>Inicio</h1>
		</main>
	)
}
