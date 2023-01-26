import { useState } from "react";
import BarChart from "../../charts/BarChart05";
import { barChart5 } from "../../codes/barCharts";
import BtnShowCode from "../../components/custom/BtnShowCode";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function FintechCard03() {
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
      // Indigo bars
      {
        label: "Inflow",
        data: [800, 2600, 4000, 1200, 3200, 1700],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Grey bars
      {
        label: "Outflow",
        data: [2800, 1700, 900, 2900, 1950, 3100],
        backgroundColor: tailwindConfig().theme.colors.slate[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.slate[400],
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
        <h2 className="font-semibold text-slate-800">Cash Flow</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <div className="grow p-1">
        <BarChart data={chartData} width={595} height={248} />
      </div>

      <BtnShowCode
        showCode={showCode}
        setShowCode={setShowCode}
        text={barChart5}
      />
    </div>
  );
}

export default FintechCard03;
