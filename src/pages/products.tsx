import { ProductColumns } from "@/components/columns/product-column";
import { DataTable } from "@/components/table/product-table";
import { productData } from "@/data/product-data";

const Products = () => {
  return (
    <main className="py-4 space-y-4">
      <div>
        <h1 className="text-3xl">Products</h1>
        <p className="text-neutral-400 text-sm">
          View and manage all your products
        </p>
      </div>

      <DataTable columns={ProductColumns} data={productData} />
    </main>
  );
};

export default Products;
