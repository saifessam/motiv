import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(...registerables);

interface Props {
	data: any
}

const BarsGraph = ({ data }: Props) => {
	return (
		<Bar data={data} options={{ plugins: { legend: { display: false } } }} />
	)
}

export default BarsGraph