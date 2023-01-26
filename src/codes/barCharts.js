export const barChart1 = `
import React, { useRef, useEffect } from "react";

import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
import { tailwindConfig, formatValue } from "../utils/Utils";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

function BarChart01({ data, width, height }) {
  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(value),
            },
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM YY",
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) => formatValue(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: "htmlLegend",
          afterUpdate(c, args, options) {
            const ul = legend.current;
            if (!ul) return;
            // Remove old legend items
            while (ul.firstChild) {
              ul.firstChild.remove();
            }
            // Reuse the built-in legendItems generator
            const items = c.options.plugins.legend.labels.generateLabels(c);
            items.forEach((item) => {
              const li = document.createElement("li");
              li.style.marginRight = tailwindConfig().theme.margin[4];
              // Button element
              const button = document.createElement("button");
              button.style.display = "inline-flex";
              button.style.alignItems = "center";
              button.style.opacity = item.hidden ? ".3" : "";
              button.onclick = () => {
                c.setDatasetVisibility(
                  item.datasetIndex,
                  !c.isDatasetVisible(item.datasetIndex)
                );
                c.update();
              };
              // Color box
              const box = document.createElement("span");
              box.style.display = "block";
              box.style.width = tailwindConfig().theme.width[3];
              box.style.height = tailwindConfig().theme.height[3];
              box.style.borderRadius = tailwindConfig().theme.borderRadius.full;
              box.style.marginRight = tailwindConfig().theme.margin[2];
              box.style.borderWidth = "3px";
              box.style.borderColor = item.fillStyle;
              box.style.pointerEvents = "none";
              // Label
              const labelContainer = document.createElement("span");
              labelContainer.style.display = "flex";
              labelContainer.style.alignItems = "center";
              const value = document.createElement("span");
              value.style.color = tailwindConfig().theme.colors.slate[800];
              value.style.fontSize = tailwindConfig().theme.fontSize["3xl"][0];
              value.style.lineHeight =
                tailwindConfig().theme.fontSize["3xl"][1].lineHeight;
              value.style.fontWeight = tailwindConfig().theme.fontWeight.bold;
              value.style.marginRight = tailwindConfig().theme.margin[2];
              value.style.pointerEvents = "none";
              const label = document.createElement("span");
              label.style.color = tailwindConfig().theme.colors.slate[500];
              label.style.fontSize = tailwindConfig().theme.fontSize.sm[0];
              label.style.lineHeight =
                tailwindConfig().theme.fontSize.sm[1].lineHeight;
              const theValue = c.data.datasets[item.datasetIndex].data.reduce(
                (a, b) => a + b,
                0
              );
              const valueText = document.createTextNode(formatValue(theValue));
              const labelText = document.createTextNode(item.text);
              value.appendChild(valueText);
              label.appendChild(labelText);
              li.appendChild(button);
              button.appendChild(box);
              button.appendChild(labelContainer);
              labelContainer.appendChild(value);
              labelContainer.appendChild(label);
              ul.appendChild(li);
            });
          },
        },
      ],
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="px-5 py-3">
        <ul ref={legend} className="flex flex-wrap"></ul>
      </div>
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default BarChart01;
`;

export const barChart2 = `
import React, { useRef, useEffect } from "react";

import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
import { formatValue } from "../utils/Utils";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

function BarChart02({ data, width, height }) {
  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            stacked: true,
            grid: {
              drawBorder: false,
            },
            beginAtZero: true,
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(value),
            },
          },
          x: {
            stacked: true,
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM YY",
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) => formatValue(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 200,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvas} width={width} height={height}></canvas>;
}

export default BarChart02;
`;

export const barChart3 = `
import React, { useRef, useEffect } from "react";

import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
import { tailwindConfig, formatThousands } from "../utils/Utils";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

function BarChart03({ data, width, height }) {
  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            stacked: true,
            grid: {
              drawBorder: false,
            },
            beginAtZero: true,
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatThousands(value),
            },
          },
          x: {
            stacked: true,
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM",
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) => formatThousands(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: "htmlLegend",
          afterUpdate(c, args, options) {
            const ul = legend.current;
            if (!ul) return;
            // Remove old legend items
            while (ul.firstChild) {
              ul.firstChild.remove();
            }
            // Reuse the built-in legendItems generator
            const items = c.options.plugins.legend.labels.generateLabels(c);
            items.forEach((item) => {
              const li = document.createElement("li");
              li.style.marginRight = tailwindConfig().theme.margin[3];
              // Button element
              const button = document.createElement("button");
              button.style.display = "inline-flex";
              button.style.alignItems = "center";
              button.style.opacity = item.hidden ? ".3" : "";
              button.onclick = () => {
                c.setDatasetVisibility(
                  item.datasetIndex,
                  !c.isDatasetVisible(item.datasetIndex)
                );
                c.update();
              };
              // Color box
              const box = document.createElement("span");
              box.style.display = "block";
              box.style.width = tailwindConfig().theme.width[3];
              box.style.height = tailwindConfig().theme.height[3];
              box.style.borderRadius = tailwindConfig().theme.borderRadius.full;
              box.style.marginRight = tailwindConfig().theme.margin[2];
              box.style.borderWidth = "3px";
              box.style.borderColor = item.fillStyle;
              box.style.pointerEvents = "none";
              // Label
              const label = document.createElement("span");
              label.style.color = tailwindConfig().theme.colors.slate[500];
              label.style.fontSize = tailwindConfig().theme.fontSize.sm[0];
              label.style.lineHeight =
                tailwindConfig().theme.fontSize.sm[1].lineHeight;
              const labelText = document.createTextNode(item.text);
              label.appendChild(labelText);
              li.appendChild(button);
              button.appendChild(box);
              button.appendChild(label);
              ul.appendChild(li);
            });
          },
        },
      ],
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="px-5 py-4">
        <div className="grow mb-1">
          <ul ref={legend} className="flex flex-wrap"></ul>
        </div>
      </div>
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default BarChart03;
`;

export const barChart4 = `
import React, { useRef, useEffect } from "react";

import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
import { tailwindConfig, formatThousands } from "../utils/Utils";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

function BarChart04({ data, width, height }) {
  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        indexAxis: "y",
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM",
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 3,
              align: "end",
              callback: (value) => formatThousands(value),
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) => formatThousands(context.parsed.x),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: "htmlLegend",
          afterUpdate(c, args, options) {
            const ul = legend.current;
            if (!ul) return;
            // Remove old legend items
            while (ul.firstChild) {
              ul.firstChild.remove();
            }
            // Reuse the built-in legendItems generator
            const items = c.options.plugins.legend.labels.generateLabels(c);
            items.forEach((item) => {
              const li = document.createElement("li");
              li.style.marginRight = tailwindConfig().theme.margin[4];
              // Button element
              const button = document.createElement("button");
              button.style.display = "inline-flex";
              button.style.alignItems = "center";
              button.style.opacity = item.hidden ? ".3" : "";
              button.onclick = () => {
                c.setDatasetVisibility(
                  item.datasetIndex,
                  !c.isDatasetVisible(item.datasetIndex)
                );
                c.update();
              };
              // Color box
              const box = document.createElement("span");
              box.style.display = "block";
              box.style.width = tailwindConfig().theme.width[3];
              box.style.height = tailwindConfig().theme.height[3];
              box.style.borderRadius = tailwindConfig().theme.borderRadius.full;
              box.style.marginRight = tailwindConfig().theme.margin[2];
              box.style.borderWidth = "3px";
              box.style.borderColor = item.fillStyle;
              box.style.pointerEvents = "none";
              // Label
              const label = document.createElement("span");
              label.style.color = tailwindConfig().theme.colors.slate[500];
              label.style.fontSize = tailwindConfig().theme.fontSize.sm[0];
              label.style.lineHeight =
                tailwindConfig().theme.fontSize.sm[1].lineHeight;
              const labelText = document.createTextNode(item.text);
              label.appendChild(labelText);
              li.appendChild(button);
              button.appendChild(box);
              button.appendChild(label);
              ul.appendChild(li);
            });
          },
        },
      ],
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="px-5 py-4">
        <ul ref={legend} className="flex flex-wrap"></ul>
      </div>
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default BarChart04;
`;

export const barChart5 = `
import React, { useRef, useEffect } from "react";

import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
import { tailwindConfig, formatValue } from "../utils/Utils";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

function BarChart05({ data, width, height }) {
  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(value),
            },
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM YY",
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) => formatValue(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: "htmlLegend",
          afterUpdate(c, args, options) {
            const ul = legend.current;
            if (!ul) return;
            // Remove old legend items
            while (ul.firstChild) {
              ul.firstChild.remove();
            }
            // Reuse the built-in legendItems generator
            const items = c.options.plugins.legend.labels.generateLabels(c);
            items.forEach((item) => {
              const li = document.createElement("li");
              li.style.marginRight = tailwindConfig().theme.margin[4];
              // Button element
              const button = document.createElement("button");
              button.style.display = "inline-flex";
              button.style.alignItems = "center";
              button.style.opacity = item.hidden ? ".3" : "";
              button.onclick = () => {
                c.setDatasetVisibility(
                  item.datasetIndex,
                  !c.isDatasetVisible(item.datasetIndex)
                );
                c.update();
              };
              // Color box
              const box = document.createElement("span");
              box.style.display = "block";
              box.style.width = tailwindConfig().theme.width[3];
              box.style.height = tailwindConfig().theme.height[3];
              box.style.borderRadius = tailwindConfig().theme.borderRadius.full;
              box.style.marginRight = tailwindConfig().theme.margin[2];
              box.style.borderWidth = "3px";
              box.style.borderColor = item.fillStyle;
              box.style.pointerEvents = "none";
              // Label
              const label = document.createElement("span");
              label.style.color = tailwindConfig().theme.colors.slate[500];
              label.style.fontSize = tailwindConfig().theme.fontSize.sm[0];
              label.style.lineHeight =
                tailwindConfig().theme.fontSize.sm[1].lineHeight;
              const labelText = document.createTextNode(item.text);
              label.appendChild(labelText);
              li.appendChild(button);
              button.appendChild(box);
              button.appendChild(label);
              ul.appendChild(li);
            });
          },
        },
      ],
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="px-5 py-3">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <div className="text-3xl font-bold text-slate-800 mr-2">
              $1,347.09
            </div>
            <div className="text-sm">Net</div>
          </div>
          <div className="grow ml-2">
            <ul ref={legend} className="flex flex-wrap justify-end"></ul>
          </div>
        </div>
      </div>
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default BarChart05;
`;

export const barChart6 = `
import React, { useRef, useEffect } from "react";

import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
import { tailwindConfig, formatValue } from "../utils/Utils";

// Import images
import revolutIcon from "../images/company-icon-01.svg";
import hsbcIcon from "../images/company-icon-02.svg";
import qontoIcon from "../images/company-icon-03.svg";
import n26Icon from "../images/company-icon-04.svg";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);
const images = [revolutIcon, hsbcIcon, qontoIcon, n26Icon];

function BarChart06({ data, width, height }) {
  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        indexAxis: "y",
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 72,
            right: 20,
          },
        },
        scales: {
          y: {
            grid: {
              display: false,
              drawBorder: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 3,
              align: "end",
              callback: (value) => formatValue(value),
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) => formatValue(context.parsed.x),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: "htmlLegend",
          afterUpdate(c, args, options) {
            const ul = legend.current;
            if (!ul) return;
            // Remove old legend items
            while (ul.firstChild) {
              ul.firstChild.remove();
            }
            // Reuse the built-in legendItems generator
            const items = c.options.plugins.legend.labels.generateLabels(c);
            items.forEach((item) => {
              const li = document.createElement("li");
              li.style.marginRight = tailwindConfig().theme.margin[4];
              // Button element
              const button = document.createElement("button");
              button.style.display = "inline-flex";
              button.style.alignItems = "center";
              button.style.opacity = item.hidden ? ".3" : "";
              button.onclick = () => {
                c.setDatasetVisibility(
                  item.datasetIndex,
                  !c.isDatasetVisible(item.datasetIndex)
                );
                c.update();
              };
              // Color box
              const box = document.createElement("span");
              box.style.display = "block";
              box.style.width = tailwindConfig().theme.width[3];
              box.style.height = tailwindConfig().theme.height[3];
              box.style.borderRadius = tailwindConfig().theme.borderRadius.full;
              box.style.marginRight = tailwindConfig().theme.margin[2];
              box.style.borderWidth = "3px";
              box.style.borderColor = item.fillStyle;
              box.style.pointerEvents = "none";
              // Label
              const label = document.createElement("span");
              label.style.color = tailwindConfig().theme.colors.slate[500];
              label.style.fontSize = tailwindConfig().theme.fontSize.sm[0];
              label.style.lineHeight =
                tailwindConfig().theme.fontSize.sm[1].lineHeight;
              const labelText = document.createTextNode(item.text);
              label.appendChild(labelText);
              li.appendChild(button);
              button.appendChild(box);
              button.appendChild(label);
              ul.appendChild(li);
            });
          },
          afterDraw(c) {
            const xAxis = c.scales.x;
            const yAxis = c.scales.y;
            yAxis.ticks.forEach((value, index) => {
              const y = yAxis.getPixelForTick(index);
              const image = new Image();
              image.src = images[index];
              c.ctx.drawImage(image, xAxis.left - 52, y - 18);
            });
          },
        },
      ],
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="px-5 py-4">
        <ul ref={legend} className="flex flex-wrap"></ul>
      </div>
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default BarChart06;
`;

export const topChannels = `
import React from 'react';
import { Link } from 'react-router-dom';

function TopChannels() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Channels</h2>
      </header>
      <div className="grow p-3">
        <div className="flex flex-col h-full">
          {/* Card content */}
          <div className="grow">
            <ul className="flex justify-between text-xs uppercase text-slate-400 font-semibold px-2 space-x-2">
              <li>Source</li>
              <li>Visitors</li>
            </ul>

            <ul className="space-y-1 text-sm text-slate-800 mt-3 mb-4">
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '82%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Google</div>
                  <div className="font-medium">4.7K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '70%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Indiehackers.com</div>
                  <div className="font-medium">4.2K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '60%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>DuckDuckGo</div>
                  <div className="font-medium">3.4K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '44%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Hacker News</div>
                  <div className="font-medium">3.1K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '40%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Github.com</div>
                  <div className="font-medium">2.2K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '30%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Madewithvuejs.com</div>
                  <div className="font-medium">1.7K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '22%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Producthunt.com</div>
                  <div className="font-medium">924</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '12%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Dev.to</div>
                  <div className="font-medium">696</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Card footer */}
          <div className="text-center pt-4 pb-1 border-t border-slate-100">
            <Link className="text-sm font-medium text-primary hover:text-indigo-600" to="#0">Channels Report -&gt;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopChannels;
`;

export const topPages = `
import React from "react";
import { Link } from "react-router-dom";

function TopPages() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Pages</h2>
      </header>
      <div className="grow p-3">
        <div className="flex flex-col h-full">
          {/* Card content */}
          <div className="grow">
            <ul className="flex justify-between text-xs uppercase text-slate-400 font-semibold px-2 space-x-2">
              <li>Source</li>
              <li>Pageviews</li>
            </ul>

            <ul className="space-y-1 text-sm text-slate-800 mt-3 mb-4">
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-emerald-100"
                  aria-hidden="true"
                  style={{ width: "82%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>cruip.com/</div>
                  <div className="font-medium">28K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-emerald-100"
                  aria-hidden="true"
                  style={{ width: "70%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>preview.cruip.com/open-pro/</div>
                  <div className="font-medium">12K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-emerald-100"
                  aria-hidden="true"
                  style={{ width: "60%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>preview.cruip.com/appy/</div>
                  <div className="font-medium">9.7K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-emerald-100"
                  aria-hidden="true"
                  style={{ width: "44%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>cruip.com/unlimited/</div>
                  <div className="font-medium">9.2K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-emerald-100"
                  aria-hidden="true"
                  style={{ width: "40%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>preview.cruip.com/simple/</div>
                  <div className="font-medium">7K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-emerald-100"
                  aria-hidden="true"
                  style={{ width: "30%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>cruip.com/about-us/</div>
                  <div className="font-medium">6.4K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-emerald-100"
                  aria-hidden="true"
                  style={{ width: "22%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>docs.cruip.com/</div>
                  <div className="font-medium">5.4K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-emerald-100"
                  aria-hidden="true"
                  style={{ width: "12%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>preview.cruip.com/twist/</div>
                  <div className="font-medium">2.2K</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Card footer */}
          <div className="text-center pt-4 pb-1 border-t border-slate-100">
            <Link
              className="text-sm font-medium text-primary hover:text-indigo-600"
              to="#0"
            >
              Page Report -&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPages;
`;

export const topCountries = `
import React from "react";
import { Link } from "react-router-dom";

function AnalyticsCard07() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Countries</h2>
      </header>
      <div className="grow p-3">
        <div className="flex flex-col h-full">
          {/* Card content */}
          <div className="grow">
            <ul className="flex justify-between text-xs uppercase text-slate-400 font-semibold px-2 space-x-2">
              <li>Source</li>
              <li>Sessions</li>
            </ul>

            <ul className="space-y-1 text-sm text-slate-800 mt-3 mb-4">
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-sky-100"
                  aria-hidden="true"
                  style={{ width: "82%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇨🇮 Ireland</div>
                  <div className="font-medium">4.2K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-sky-100"
                  aria-hidden="true"
                  style={{ width: "70%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇺🇸 United States</div>
                  <div className="font-medium">3.4K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-sky-100"
                  aria-hidden="true"
                  style={{ width: "60%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇩🇪 Germany</div>
                  <div className="font-medium">1.6k</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-sky-100"
                  aria-hidden="true"
                  style={{ width: "44%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇮🇹 Italy</div>
                  <div className="font-medium">1.2k</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-sky-100"
                  aria-hidden="true"
                  style={{ width: "40%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇬🇧 United Kingdom</div>
                  <div className="font-medium">912</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-sky-100"
                  aria-hidden="true"
                  style={{ width: "30%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇫🇷 France</div>
                  <div className="font-medium">677</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-sky-100"
                  aria-hidden="true"
                  style={{ width: "22%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇮🇳 India</div>
                  <div className="font-medium">449</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div
                  className="absolute inset-0 bg-sky-100"
                  aria-hidden="true"
                  style={{ width: "12%" }}
                ></div>
                <div className="relative flex justify-between space-x-2">
                  <div>🇸🇬 Singapore</div>
                  <div className="font-medium">269</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Card footer */}
          <div className="text-center pt-4 pb-1 border-t border-slate-100">
            <Link
              className="text-sm font-medium text-primary hover:text-indigo-600"
              to="#0"
            >
              Countries Report -&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard07;
`;
