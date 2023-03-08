import { useState } from 'react';
import BarsGraph from "../components/bars_graph/BarsGraph";
import Chart from "../components/chart/Chart";
import Section from "../components/section/Section";
import StatusCard from "../components/status_card/StatusCard";
import LinesGraph from "../components/lines_graph/LinesGraph";
import SVGsProvider from "../data/SVGsProvider";
import MilesChartData from '../data/MilesChartData';
import CarChartData from '../data/CarChartData';
import CarDetailsCard from '../components/car_details_card/CarDetailsCard';
import DashboardCarsData from '../data/DashboardCarsData';

const Dashboard = () => {
  const [barsGraphData] = useState({
    labels: MilesChartData.map((data) => data.hour),
    datasets: [{
      label: "Miles",
      data: MilesChartData.map((data) => data.miles),
      fill: true,
      backgroundColor: "#2884FF",
    }],
  });

  const [carGraphData] = useState({
    labels: CarChartData.map((data) => data.hour),
    datasets: [{
      label: "Miles",
      data: CarChartData.map((data) => data.miles),
      fill: true,
      borderWidth: 1,
      borderColor: "#FF764C",
      color: "#242731",
      backgroundColor: "#FF764C25",
      cubicInterpolationMode: "monotone",
      pointStyle: false,
    }],
  });

  return (
    <>
      <Section grid>
        <StatusCard icon={SVGsProvider.EnergyIcon} title="Energy" value={45} color={"#2884ff"} />
        <StatusCard icon={SVGsProvider.RangeIcon} title="Range" value={15.7} color={"#ff6370"} max={1000} />
        <StatusCard icon={SVGsProvider.WaterDropIcon} title="Break Fluid" value={19} color={"#70cf97"} />
        <StatusCard icon={SVGsProvider.TierIcon} title="Tier Wear" value={25} color={"#f6cc0d"} />
      </Section>
      <Section grid>
        <Chart title={"Miles"} subTitle={"Statistics"} selectorTitle={"256 Miles"} reversedSelector graph={<BarsGraph data={barsGraphData} />} />
        <Chart title={"Car"} subTitle={"Statistics"} selectorTitle={"20 Fabruary 2022"} graph={<LinesGraph data={carGraphData} />} />
      </Section>
      <Section grid>
        {DashboardCarsData.map((car) => <CarDetailsCard data={car} key={car.id} />)}
      </Section>
    </>
  )
}

export default Dashboard;