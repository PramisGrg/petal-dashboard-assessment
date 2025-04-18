import Cards from "@/components/cards/cards";
import { RecentSales } from "@/components/cards/recent-sales";
import { InteractiveAreaChart } from "@/components/charts/area-chart";
import { InteractiveBarChart } from "@/components/charts/bar-chart";

const Dashboard = () => {
  return (
    <div className="py-4 space-y-10">
      <h1 className="text-3xl">Hi, Welcome back 👋</h1>

      <Cards />
      <InteractiveAreaChart />

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <RecentSales />
        <InteractiveBarChart />
      </div>
    </div>
  );
};

export default Dashboard;
