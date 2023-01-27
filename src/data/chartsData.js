import { DashboardCard06 } from "../partials/dashboard.jsx";

export const charts = [
  // {
  //   id: 1,
  //   title: "Line Charts",
  //   info: ` The line chart, or line graph, connects several distinct data
  //   points, presenting them as one continuous evolution. Use line
  //   charts to view trends in data, usually over time (like stock
  //   price changes over five years or website page views for the
  //   month). The result is a simple, straightforward way to
  //   visualize changes in one value relative to another.`,
  //   data: [
  //     {
  //       id: 1,
  //       extra: "{/* Line chart (Acme Plus) */}",
  //       component: () => <DashboardCard01 key={1} />,
  //     },
  //     {
  //       id: 2,
  //       extra: "{/* Line chart (Acme Advanced) */}",
  //       component: () => <DashboardCard02 key={2} />,
  //     },
  //     {
  //       id: 3,
  //       extra: "{/* Line chart (Acme Professional) */}",
  //       component: () => <DashboardCard03 key={3} />,
  //     },
  //     {
  //       id: 4,
  //       extra: "{/* Line chart (Real Time Value) */}",
  //       component: () => <DashboardCard05 key={4} />,
  //     },
  //     {
  //       id: 5,
  //       extra: "{/* Line chart (Sales Over Time) */}",
  //       component: () => <DashboardCard08 key={5} />,
  //     },
  //     {
  //       id: 6,
  //       extra: "{/* Line chart (Analytics) */}",
  //       component: () => <AnalyticsCard01 key={6} />,
  //     },
  //     {
  //       id: 7,
  //       extra: "{/*  Line chart (Active Users Right Now) */}",
  //       component: () => <AnalyticsCard02 key={7} />,
  //     },
  //     {
  //       id: 8,
  //       extra: "{/* Line chart (Portfolio Returns) */}",
  //       component: () => <FintechCard01 key={8} />,
  //     },
  //     {
  //       id: 9,
  //       extra: "{/* Line chart (Saving Goals) */}",
  //       component: () => <FintechCard07 key={9} />,
  //     },
  //     {
  //       id: 10,
  //       extra: "{/* Line chart (Growth Portfolio) */}",
  //       component: () => <FintechCard08 key={10} />,
  //     },
  //     {
  //       id: 11,
  //       extra: "{/* Line charts (Stock graphs) */}",
  //       component: () => <FintechCard10 key={11} />,
  //     },
  //     {
  //       id: 12,
  //       extra: "{/* Line charts (Stock graphs) */}",
  //       component: () => <FintechCard11 key={12} />,
  //     },
  //     {
  //       id: 13,
  //       extra: "{/* Line charts (Stock graphs) */}",
  //       component: () => <FintechCard12 key={13} />,
  //     },
  //     {
  //       id: 14,
  //       extra: "{/* Line charts (Stock graphs) */}",
  //       component: () => <FintechCard13 key={14} />,
  //     },
  //     {
  //       id: 15,
  //       extra: "{/* Table (Market Trends) */}",
  //       component: () => <FintechCard14 key={15} />,
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Bar Charts",
  //   info: ` Bar charts are one of the most common data visualizations. You
  //   can use them to quickly compare data across categories,
  //   highlight differences, show trends and outliers, and reveal
  //   historical highs and lows at a glance. Bar charts are
  //   especially effective when you have data that can be split into
  //   multiple categories.`,
  //   data: [
  //     {
  //       id: 1,
  //       extra: "{/* Bar chart (Direct vs Indirect) */}",
  //       component: () => <DashboardCard04 key={1} />,
  //     },
  //     {
  //       id: 2,
  //       extra: "{/* Stacked bar chart (Acquisition Channels) */}",
  //       component: () => <AnalyticsCard03 key={2} />,
  //     },
  //     {
  //       id: 3,
  //       extra: "{/* Stacked bar chart (Sales VS Refunds) */}",
  //       component: () => <DashboardCard09 key={3} />,
  //     },
  //     {
  //       id: 4,
  //       extra: "{/* Horizontal bar chart (Audience Overview) */}",
  //       component: () => <AnalyticsCard04 key={4} />,
  //     },
  //     {
  //       id: 5,
  //       extra: "{/* Report card (Top Channels) */}",
  //       component: () => <AnalyticsCard05 key={5} />,
  //     },
  //     {
  //       id: 6,
  //       extra: "{/* Report card (Top Pages) */}",
  //       component: () => <AnalyticsCard06 key={6} />,
  //     },
  //     {
  //       id: 7,
  //       extra: "{/* Report card (Top Countries) */}",
  //       component: () => <AnalyticsCard07 key={7} />,
  //     },
  //     {
  //       id: 8,
  //       extra: "{/* Bar chart (Cash Flow) */}",
  //       component: () => <FintechCard03 key={8} />,
  //     },
  //     {
  //       id: 9,
  //       extra: "{/* Horizontal bar chart (Cash Flow by Account) */}",
  //       component: () => <FintechCard04 key={9} />,
  //     },
  //   ],
  // },
  {
    id: 3,
    title: "Pie Charts",
    info: `Pie charts are powerful for adding detail to other
      visualizations. Alone, a pie chart doesn’t give the viewer a
      way to quickly and accurately compare information. Since the
      viewer has to create context on their own, key points from
      your data are missed. Instead of making a pie chart the focus
      of your dashboard, try using them to drill down on other
      visualizations.`,
    data: [
      {
        id: 1,
        extra: "{/* Doughnut chart (Top Countries) */}",
        component: () => {
          return (
            <div>
              <DashboardCard06 key={1} />
            </div>
          );
        },
      }
    ],
  },
];
