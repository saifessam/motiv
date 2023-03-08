import './Chart.css'

interface Props {
	title: String
	subTitle: String
	selectorTitle: String
	reversedSelector?: boolean
	graph: any
}

const Chart = (props: Props) => {
	return (
		<div className='chart'>
			<div className="chart-title">
				<h4>
					{props.title}
					&nbsp;
					<span>{props.subTitle}</span>
				</h4>
			</div>
			<div className="chart-content">
				<div className={props.reversedSelector ? "chart-content-selector reversed" : "chart-content-selector"}>
					<span className="chart-content-selector-title">{props.selectorTitle}</span>
					<div className="chart-content-selector-options">
						<button className='active'>Day</button>
						<button>Week</button>
						<button>Month</button>
					</div>
				</div>

				<div className="chart-content-graph">{props.graph}</div>
			</div>
		</div>
	)
}

export default Chart