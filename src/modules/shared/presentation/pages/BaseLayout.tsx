import React from "react";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default BaseLayout;
