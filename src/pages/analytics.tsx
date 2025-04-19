import { InteractivePieChart } from "@/components/charts/pie-chart";
import TopProducts from "@/components/top-products";

const Analytics = () => {
  return (
    <main className="py-4 space-y-4">
      <header>
        <h1 className="text-3xl">Analytics</h1>
        <p className="text-neutral-400 text-sm">
          View and manage all your analytics
        </p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <TopProducts />
        </div>
        <InteractivePieChart />
      </section>
    </main>
  );
};

export default Analytics;
