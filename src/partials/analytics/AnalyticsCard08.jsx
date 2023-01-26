import { useState } from "react";
import DoughnutChart from "../../charts/DoughnutChart";
import { doughnutChart } from "../../codes/pieCharts";
import BtnShowCode from "../../components/custom/BtnShowCode";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function AnalyticsCard08() {
  const chartData = {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        label: "Sessions By Device",
        data: [12, 50, 38],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.sky[400],
          tailwindConfig().theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.sky[500],
          tailwindConfig().theme.colors.indigo[900],
        ],
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  const [showCode, setShowCode] = useState(false);

  return (
    <div
      className={`flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200 ${
        !showCode && "h-[28rem]"
      }`}
    >
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Sessions By Device</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
      <BtnShowCode
        showCode={showCode}
        setShowCode={setShowCode}
        text={doughnutChart}
      />
    </div>
  );
}

export default AnalyticsCard08;
