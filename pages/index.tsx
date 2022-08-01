import type { NextPage } from 'next'
import MyHome from '../components/home/home'
import UserInfo from '../components/home/user'

const Home: NextPage = () => {
	return (
		<div>
			<UserInfo />
			<MyHome />
		</div>
	)
}

export default Home
