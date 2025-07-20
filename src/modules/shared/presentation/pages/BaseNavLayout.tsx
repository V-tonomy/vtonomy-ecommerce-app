import { VtonomyAppBar } from "../components/VtonomyAppBar";
import BaseLayout from "./BaseLayout";

export const BaseNavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <VtonomyAppBar />
      <BaseLayout>{children}</BaseLayout>
    </div>
  );
};
