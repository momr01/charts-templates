import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import BarChart from "../../charts/BarChart02";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";
import {
  a11yDark,
  a11yLight,
  CopyBlock,
  dracula,
  github,
  paraisoDark,
  paraisoLight,
  shadesOfPurple,
  tomorrow,
  zenburn,
} from "react-code-blocks";
import { salesVSRefunds } from "../../codes/charts";

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

  const toggleCode = () => {
    setShowCode((prev) => !prev);
  };

  const copyCode = () => {
    console.log("copied");
  };

  return (
    // <div className="flex flex-col col-span-full sm:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
    //   <header className="px-5 py-4 border-b border-slate-100 flex items-center">
    //     <h2 className="font-semibold text-slate-800">Sales VS Refunds</h2>
    //     <Tooltip className="ml-2" size="lg">
    //       <div className="text-sm">
    //         Sint occaecat cupidatat non proident, sunt in culpa qui officia
    //         deserunt mollit.
    //       </div>
    //     </Tooltip>
    //   </header>
    //   <div className="px-5 py-3">
    //     <div className="flex items-start">
    //       <div className="text-3xl font-bold text-slate-800 mr-2">+$6,796</div>
    //       <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">
    //         -34%
    //       </div>
    //     </div>
    //   </div>
    //   {/* Chart built with Chart.js 3 */}
    //   <div className="grow">
    //     {/* Change the height attribute to adjust the chart height */}
    //     <BarChart data={chartData} width={595} height={248} />
    //   </div>
    //   <CopyBlock
    //     language="jsx"
    //     text={`var sys = require("sys");
    //       sys.puts("Hello World");
    //       `}
    //     showLineNumbers={true}
    //     theme={dracula}
    //     wrapLines={true}
    //     codeBlock
    //   />
    // </div>
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Sales VS Refunds</h2>
        <Tooltip className="ml-2" size="lg">
          <div className="text-sm">
            Sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit.
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
      <div className="p-4">
        <div className="grow">
          {/* Change the height attribute to adjust the chart height */}
          <BarChart data={chartData} width={595} height={248} />
        </div>
        <div className="flex justify-center my-2">
          <Tooltip
            title={showCode ? "Hide the full source" : "Show the full source"}
          >
            <button
              className="p-3 border-2 rounded-lg hover:bg-slate-200"
              onClick={toggleCode}
            >{`<>`}</button>
          </Tooltip>
        </div>

        {showCode && (
          <div className="p-10 text-xs">
            <CopyBlock
              language="jsx"
              text={salesVSRefunds}
              showLineNumbers={true}
              theme={dracula}
              //theme={zenburn}
              //theme={a11yLight}
              // theme={a11yDark}
              //theme={github}
              //theme={paraisoDark}
              //theme={paraisoLight}
              //theme={tomorrow}
              //theme={shadesOfPurple}
              wrapLines={true}
              codeBlock
              //highlight="11-16"
              //onCopy={copyCode}
              //onClick={copyCode}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardCard09;
