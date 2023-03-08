import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);

interface Props {
	data: any
}

const LinesGraph = ({ data }: Props) => {
	return (
		<Line data={data} options={{ plugins: { legend: { display: false } } }} />
	)
}

export default LinesGraph