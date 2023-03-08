import CarsData from '../../data/CarsData'
import SVGsProvider from '../../data/SVGsProvider'
import Dropdown from '../dropdown/Dropdown'
import './PageHeading.css'

const PageHeading = () => {
	return (
		<div className="page-heading">
			<h4 className="page-heading-title">Booking</h4>
			<div className="page-heading-filters">
				<div className="page-heading-filters-section">
					<Dropdown data={["New", "Used"]} />
					<Dropdown data={CarsData.map((car) => car.name)} />
				</div>
				<div className="page-heading-filters-section">
					<button><SVGsProvider.DashboardIcon /></button>
					<button><SVGsProvider.SettingsIcon /></button>
				</div>
			</div>
		</div>
	)
}

export default PageHeading