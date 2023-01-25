import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import {
  AnalyticsCard01,
  AnalyticsCard02,
  AnalyticsCard03,
  AnalyticsCard04,
  AnalyticsCard06,
  AnalyticsCard05,
  AnalyticsCard07,
  AnalyticsCard08,
  AnalyticsCard09,
  AnalyticsCard10,
} from "../partials/analytics";
import {
  DashboardCard01,
  DashboardCard02,
  DashboardCard03,
  DashboardCard04,
  DashboardCard05,
  DashboardCard06,
  DashboardCard08,
  DashboardCard09,
} from "../partials/dashboard";
import {
  FintechCard01,
  FintechCard03,
  FintechCard04,
  FintechCard07,
  FintechCard08,
  FintechCard09,
  FintechCard10,
  FintechCard11,
  FintechCard12,
  FintechCard13,
  FintechCard14,
} from "../partials/fintech";
import Tooltip from "../components/Tooltip";

const pieCharts = [
  {
    id: 1,
    title: "Pie Charts",
    info: "",
    data: [
      {
        id: 1,
        extra: "{/* Doughnut chart (Top Countries) */}",
        component: () => <DashboardCard06 key={1} />,
      },
      {
        id: 2,
        extra: "{/* Doughnut chart (Sessions By Device) */}",
        component: () => <AnalyticsCard08 key={2} />,
      },
      {
        id: 3,
        extra: "{/* Doughnut chart (Visit By Age Category) */}",
        component: () => <AnalyticsCard09 key={3} />,
      },
      {
        id: 4,
        extra: "{/* Polar chart (Sessions By Gender) */}",
        component: () => <AnalyticsCard10 key={4} />,
      },
      {
        id: 5,
        extra: "{/* Pie chart (Portfolio Value) */}",
        component: () => <FintechCard09 key={5} />,
      },
    ],
  },
];

function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          <div className="px-4 sm:px-6 lg:px-20 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />

            {/* Cards */}
            <div
            //  className="grid grid-cols-12 gap-6"
            >
              {/**
               * line charts
               */}
              <section className="p-5 mb-20 section_shadow">
                <div className="flex justify-center items-center mt-2 mb-5">
                  <h2 className="text-xl md:text-2xl text-slate-800 font-bold text-center">
                    Line Charts
                  </h2>
                </div>
                <div className="italic text-sm text-center mb-10">
                  The line chart, or line graph, connects several distinct data
                  points, presenting them as one continuous evolution. Use line
                  charts to view trends in data, usually over time (like stock
                  price changes over five years or website page views for the
                  month). The result is a simple, straightforward way to
                  visualize changes in one value relative to another.
                </div>

                <section className="grid grid-cols-12 gap-6">
                  {/* Line chart (Acme Plus) */}
                  <DashboardCard01 />
                  {/* Line chart (Acme Advanced) */}
                  <DashboardCard02 />
                  {/* Line chart (Acme Professional) */}
                  <DashboardCard03 />
                  {/* Line chart (Real Time Value) */}
                  <DashboardCard05 />
                  {/* Line chart (Sales Over Time) */}
                  <DashboardCard08 />
                  {/* Line chart (Analytics) */}
                  <AnalyticsCard01 />
                  {/*  Line chart (Active Users Right Now) */}
                  <AnalyticsCard02 />
                  {/* Line chart (Portfolio Returns) */}
                  <FintechCard01 />
                  {/* Line chart (Saving Goals) */}
                  <FintechCard07 />
                  {/* Line chart (Growth Portfolio) */}
                  <FintechCard08 />
                  {/* Line charts (Stock graphs) */}
                  <FintechCard10 />
                  <FintechCard11 />
                  <FintechCard12 />
                  <FintechCard13 />
                  {/* Table (Market Trends) */}
                  <FintechCard14 />
                </section>
              </section>

              {/**
               * bar charts
               */}
              <section className="p-5 mb-20 section_shadow">
                <div className="flex justify-center items-center mt-2 mb-5">
                  <h2 className="text-xl md:text-2xl text-slate-800 font-bold text-center">
                    Bar Charts
                  </h2>
                </div>
                <div className="italic text-sm text-center mb-10">
                  Bar charts are one of the most common data visualizations. You
                  can use them to quickly compare data across categories,
                  highlight differences, show trends and outliers, and reveal
                  historical highs and lows at a glance. Bar charts are
                  especially effective when you have data that can be split into
                  multiple categories.
                </div>
                <section className="grid grid-cols-12 gap-6 mb-10">
                  {/* Bar chart (Direct vs Indirect) */}
                  <DashboardCard04 />
                  {/* Stacked bar chart (Acquisition Channels) */}
                  <AnalyticsCard03 />
                  {/* Stacked bar chart (Sales VS Refunds) */}
                  <DashboardCard09 />
                  {/* Horizontal bar chart (Audience Overview) */}
                  <AnalyticsCard04 />
                  {/* Report card (Top Channels) */}
                  <AnalyticsCard05 />
                  {/* Report card (Top Pages) */}
                  <AnalyticsCard06 />
                  {/* Report card (Top Countries) */}
                  <AnalyticsCard07 />
                  {/* Bar chart (Cash Flow) */}
                  <FintechCard03 />
                  {/* Horizontal bar chart (Cash Flow by Account) */}
                  <FintechCard04 />
                </section>
              </section>

              {/**
               * pie charts
               */}
              <section className="p-5 mb-10 section_shadow">
                <div className="flex justify-center items-center mt-2 mb-5">
                  <h2 className="text-xl md:text-2xl text-slate-800 font-bold text-center">
                    Pie Charts
                  </h2>
                </div>
                <div className="italic text-sm text-center mb-10">
                  Pie charts are powerful for adding detail to other
                  visualizations. Alone, a pie chart doesn’t give the viewer a
                  way to quickly and accurately compare information. Since the
                  viewer has to create context on their own, key points from
                  your data are missed. Instead of making a pie chart the focus
                  of your dashboard, try using them to drill down on other
                  visualizations.
                </div>
                <section className="grid grid-cols-12 gap-6 mb-10">
                  {pieCharts[0].data.map((comp) => comp.component())}
                </section>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
