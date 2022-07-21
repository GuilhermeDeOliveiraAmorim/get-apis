import type { NextPage } from 'next'
import MyHome from '../components/home/home'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<MyHome />
		</div>
	)
}

export default Home
