import {useState} from "react";
import BarChart from "../../charts/BarChart02";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";
import BtnShowCode from "../../components/custom/BtnShowCode";
import Tooltip from "../../components/Tooltip";
import { barChart2 } from "../../codes/barCharts";

function DashboardCard09() {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
    ],
    datasets: [
      // Light blue bars
      {
        label: "Stack 1",
        data: [6200, 9200, 6600, 8800, 5200, 9200],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: "Stack 2",
        data: [-4000, -2600, -5350, -4000, -7500, -2000],
        backgroundColor: tailwindConfig().theme.colors.indigo[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[300],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };
  const [showCode, setShowCode] = useState(false);

  return (
    <div className={`flex flex-col col-span-full sm:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200 ${
      !showCode && ""
    }`}>
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Sales VS Refunds</h2>
        <Tooltip className="ml-2" size="lg">
          {/* <div className="text-sm">
            Sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit.
          </div> */}
          <div className="text-sm">
            Bar charts are one of the most common data visualizations. You can
            use them to quickly compare data across categories, highlight
            differences, show trends and outliers, and reveal historical highs
            and lows at a glance. Bar charts are especially effective when you
            have data that can be split into multiple categories.
          </div>
        </Tooltip>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">+$6,796</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">
            -34%
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div>
        <div className="grow">
          {/* Change the height attribute to adjust the chart height */}
          <BarChart data={chartData} width={595} height={248} />
        </div>
        {/* <BtnShowCode /> */}
        <BtnShowCode
          showCode={showCode}
          setShowCode={setShowCode}
          text={barChart2}
        />
      </div>
    </div>
  );
}

export default DashboardCard09;
