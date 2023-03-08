import { useState } from 'react';
import SVGsProvider from '../../data/SVGsProvider'
import './CarPreviewCard.css'

interface Props {
	data: any
}

const CarPreviewCard = (props: Props) => {
	const [favorite, setFavorite] = useState(false);

	return (
		<div className='car-preview-card'>
			<div className='car-preview-card-header'>
				<div className='car-preview-card-header-title'>
					<h4>{props.data.name} {props.data.model}</h4>
					<span>{props.data.type}</span>
				</div>
				<button onClick={() => setFavorite((prev) => !prev)}>{favorite ? <SVGsProvider.HeartFilledIcon /> : <SVGsProvider.HeartIcon />}</button>
			</div>
			<div className='car-preview-card-body'><img src={require(`./../../assets/images/cars/${props.data.image}`)} alt={`${props.data.name}`} /></div>
			<div className='car-preview-card-footer'>
				<div className="car-preview-card-footer-section">
					<span><SVGsProvider.UserIcon />{props.data.users}</span>
					<span><SVGsProvider.ReshareIcon />{props.data.transmition}</span>
				</div>
				<div className="car-preview-card-footer-section"><span id="price">${props.data.price}/d</span></div>
			</div>
		</div>
	)
}

export default CarPreviewCard