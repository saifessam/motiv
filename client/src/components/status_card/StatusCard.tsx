import './StatusCard.css'

interface Props {
	icon: any
	title: String
	value: number
	color: String
	max?: number
}

const StatusCard = (props: Props) => {
	return (
		<div className="status-card">
			<div className="status-card-section">
				<div className="status-card-icon" style={{ backgroundColor: `${props.color}40` }}><props.icon /></div>
				<span className="status-card-title">{props.title}</span>
			</div>
			<div className="status-card-section">
				<div className="progress-bar" data-value={`${props.value}%`}>
					<div className="progress-bar-range" style={{ width: `${props.value}%`, backgroundColor: `${props.color}` }}></div>
				</div>
			</div>
		</div>
	)
}

export default StatusCard