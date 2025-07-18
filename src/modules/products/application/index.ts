import { ProductsModule } from "../presentation/ProductsModule";

export default {
  routeProps: {
    path: "/",
    exact: true,
    component: ProductsModule,
  },
  name: "Products",
};
