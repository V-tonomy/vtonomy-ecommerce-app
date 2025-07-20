import React, { JSX } from "react";
import { ProductsPage } from "./pages/ProductsPage";
import { BaseNavLayout } from "@/modules/shared/presentation/pages/BaseNavLayout";

export const ProductsModule = () => {
  const Layout = ({ children }: { children: React.ReactNode }) => {
    return <BaseNavLayout>{children}</BaseNavLayout>;
  };

  const Page = () => {
    return <ProductsPage />;
  };

  return { Layout, Page };
};
