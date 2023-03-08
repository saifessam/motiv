import SVGsProvider from '../../data/SVGsProvider'
import './Navbar.css'

const Navbar = () => {
	return (
		<nav>
			<form className="navbar-search">
				<div className="navbar-search-input">
					<SVGsProvider.SearchIcon />
					<input type="text" placeholder='Search or type' />
				</div>
			</form>

			<ul className="navbar-items">
				<SVGsProvider.NotificationIcon />
				<img src={require("./../../assets/images/users/1.jpg")} alt="User profile" />
			</ul>
		</nav>
	)
}

export default Navbar