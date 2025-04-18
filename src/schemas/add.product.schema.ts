import { z } from "zod";

const CategorySchema = z.enum(["Sweatshirts", "Hoodies", "Lounge Pants"]);

export const addProductSchema = z.object({
  name: z.string().min(2, "Enter a valid product name"),
  category: CategorySchema,
  color: z.string().min(2, "Enter color for the product"),
  price: z.coerce.number().min(0.01, "Enter a valid price"),
  currency: z.string().min(1, "Enter a valid currency"),
  stock: z.coerce.number().min(0.01, "Enter a valid stock"),
  release_date: z.string().min(2, "Enter a valid release date"),
});

export type TAddProductSchema = z.infer<typeof addProductSchema>;
