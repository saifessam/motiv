import CarPreviewCard from "../components/car_preview_card/CarPreviewCard"
import PageHeading from "../components/page_heading/PageHeading"
import Section from "../components/section/Section"
import CarsData from "../data/CarsData"

const Booking = () => {
	return (
		<>
			<Section>
				<PageHeading />
			</Section>
			<Section grid3>
				{CarsData.map((car) => <CarPreviewCard data={car} key={car.id} />)}
			</Section>
		</>
	)
}

export default Booking