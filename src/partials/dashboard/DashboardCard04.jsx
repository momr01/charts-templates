import { useState } from "react";
import BarChart from "../../charts/BarChart01";
import { barChart1 } from "../../codes/barCharts";
import BtnShowCode from "../../components/BtnShowCode";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function DashboardCard04() {
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
        label: "Direct",
        data: [800, 1600, 900, 1300, 1950, 1700],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: "Indirect",
        data: [4900, 2600, 5350, 4800, 5200, 4800],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  const [showCode, setShowCode] = useState(false);

  return (
    <div
      className={`flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200 ${
        !showCode && "h-[30rem]"
      }`}
    >
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Direct VS Indirect</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <div className="grow p-1">
        <BarChart data={chartData} width={595} height={248} />
      </div>

      <BtnShowCode
        showCode={showCode}
        setShowCode={setShowCode}
        text={barChart1}
      />
    </div>
  );
}

export default DashboardCard04;
