import styles from '../../../styles/home.module.css'
import NavBar from '../../../components/NavBar/EN/NavBar'

export default function Home() {
	return (
		<main className={styles.home}>
			<NavBar />
			<h1>Home</h1>
		</main>
	)
}
