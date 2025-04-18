import { CustomerColumns } from "@/components/columns/customer-column";
import { DataTable } from "@/components/table/table";
import { customerData } from "@/data/customer-data";

const Customers = () => {
  return (
    <main className="py-4 space-y-4">
      <div>
        <h1 className="text-3xl">Products</h1>
        <p className="text-neutral-400 text-sm">
          View and manage all your products
        </p>
      </div>

      <DataTable columns={CustomerColumns} data={customerData} />
    </main>
  );
};

export default Customers;
