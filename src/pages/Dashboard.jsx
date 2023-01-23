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

function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          <div className="px-4 sm:px-6 lg:px-20 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
              {/* Bar chart (Direct vs Indirect) */}
              <DashboardCard04 />
              {/* Line chart (Real Time Value) */}
              <DashboardCard05 />
              {/* Doughnut chart (Top Countries) */}
              <DashboardCard06 />
              {/* Line chart (Sales Over Time) */}
              <DashboardCard08 />
              {/* Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09 />
              {/* Line chart (Analytics) */}
              <AnalyticsCard01 />
              {/*  Line chart (Active Users Right Now) */}
              <AnalyticsCard02 />
              {/* Stacked bar chart (Acquisition Channels) */}
              <AnalyticsCard03 />
              {/* Horizontal bar chart (Audience Overview) */}
              <AnalyticsCard04 />
              {/* Report card (Top Channels) */}
              <AnalyticsCard05 />
              {/* Report card (Top Pages) */}
              <AnalyticsCard06 />
              {/* Report card (Top Countries) */}
              <AnalyticsCard07 />
              {/* Doughnut chart (Sessions By Device) */}
              <AnalyticsCard08 />
              {/* Doughnut chart (Visit By Age Category) */}
              <AnalyticsCard09 />
              {/* Polar chart (Sessions By Gender) */}
              <AnalyticsCard10 />
              {/* Line chart (Portfolio Returns) */}
              <FintechCard01 />
              {/* Bar chart (Cash Flow) */}
              <FintechCard03 />
              {/* Horizontal bar chart (Cash Flow by Account) */}
              <FintechCard04 />
              {/* Line chart (Saving Goals) */}
              <FintechCard07 />
              {/* Line chart (Growth Portfolio) */}
              <FintechCard08 />
              {/* Pie chart (Portfolio Value) */}
              <FintechCard09 />
              {/* Line charts (Stock graphs) */}
              <FintechCard10 />
              <FintechCard11 />
              <FintechCard12 />
              <FintechCard13 />
              {/* Table (Market Trends) */}
              <FintechCard14 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
