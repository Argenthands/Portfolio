
import styles from '../../../styles/about.module.css'
//importar componente NavBar
import NavBar from '../../../components/NavBar/EN/NavBar'
// tengo que pasarle el lenguaje como prop
export default function About() {
	return (
		<main className={styles.about}>
			<NavBar/>
			<h1>About</h1>
		</main>
	)
}