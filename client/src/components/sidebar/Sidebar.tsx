import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppTexts from '../../data/AppTexts'
import SVGsProvider from '../../data/SVGsProvider'
import './Sidebar.css'

const Sidebar = () => {
	const [expanded, setExpanded] = useState(false);
	const { pathname } = useLocation();

	const setActiveSidebarItem = (path: String) => {
		if (path === pathname) {
			return "sidebar-item active";
		} else {
			return "sidebar-item"
		}
	}

	return (
		<aside className={expanded ? 'active' : undefined}>
			<div className="sidebar-logo"><SVGsProvider.AppLogo /><span>{AppTexts.app_name}</span></div>

			<div className="sidebar-items">
				<ul className="sidebar-items-section">
					<Link to={"/"} className={setActiveSidebarItem("/")}><SVGsProvider.DashboardIcon /><span>Dashboard</span></Link>
					<Link to={"/assets"} className={setActiveSidebarItem("/assets")}><SVGsProvider.DoughnutIcon /><span>Assets</span></Link>
					<Link to={"/booking"} className={setActiveSidebarItem("/booking")}><SVGsProvider.CarIcon /><span>Booking</span></Link>
					<Link to={"/sell-cars"} className={setActiveSidebarItem("/sell-cars")} ><SVGsProvider.BagIcon /><span>Sell Cars</span></Link>
					<Link to={"/buy-cars"} className={setActiveSidebarItem("/buy-cars")} ><SVGsProvider.CartIcon /><span>Buy Cars</span></Link>
					<Link to={"/services"} className={setActiveSidebarItem("/services")}><SVGsProvider.FencingIcon /><span>Services</span></Link>
					<Link to={"/calender"} className={setActiveSidebarItem("/calender")}><SVGsProvider.CalenderIcon /><span>Calender</span></Link>
					<Link to={"/messages"} className={setActiveSidebarItem("/messages")}><SVGsProvider.CommentIcon /><span>Messages</span></Link>
				</ul>

				<ul className="sidebar-items-section">
					<Link to={"/settings"} className={setActiveSidebarItem("/settings")}><SVGsProvider.GearIcon /><span>Settings</span></Link>
					<div className="sidebar-item"><SVGsProvider.LogOutIcon /><span>Log Out</span></div>
				</ul>
			</div>
		</aside>
	)
}

export default Sidebar