import SVGsProvider from '../../data/SVGsProvider'
import './CarDetailsCard.css'

interface Props {
	data: any
}

const CarDetailsCard = (props: Props) => {
	return (
		<div className='car-details-card' style={{ backgroundColor: props.data.backgroundColor }}>
			<div className="car-details-card-header">
				<SVGsProvider.RefreshIcon />
				{props.data.recommendation}
				&nbsp;
				Recommend
			</div>
			<div className="car-details-card-body">
				<img src={require(`./../../assets/images/cars/${props.data.image}`)} alt={`${props.data.name}`} />
			</div>
			<div className="car-details-card-footer">
				<div className="car-details-card-footer-title">{props.data.name}</div>
				<div className="car-details-card-footer-actions">
					<div className="car-details-card-footer-actions-buttons">
						<SVGsProvider.ReshareIcon />
						{props.data.shares}
						<SVGsProvider.FavoriteIcon />
						<SVGsProvider.EnergyIcon />
					</div>
					<span className="car-details-card-footer-actions-price">${props.data.price}/h</span>
				</div>
			</div>
		</div>
	)
}

export default CarDetailsCard