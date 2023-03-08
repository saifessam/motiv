import Main from '../components/main/Main'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

interface Props {
	children: any
}

const PageLayout = ({ children }: Props) => {
	return (
		<>
			<Sidebar />

			<Main>
				<Navbar />
				{children}
			</Main>
		</>
	)
}

export default PageLayout