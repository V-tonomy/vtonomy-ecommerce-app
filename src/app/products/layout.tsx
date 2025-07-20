import { ProductsModule } from "@/modules/products/presentation/ProductsModule";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return ProductsModule().Layout({ children });
}
