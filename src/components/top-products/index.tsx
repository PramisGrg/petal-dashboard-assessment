import ProductCard from "./product-card";

const TopProducts = () => {
  return (
    <section className="border h-full border-gray-200 rounded-xl shadow-sm p-4 space-y-6">
      <header>
        <h2 className="font-semibold text-lg">Top Products</h2>
        <p className="text-sm text-neutral-400">
          Products that really matter the most
        </p>
      </header>

      <ProductCard />
    </section>
  );
};

export default TopProducts;
