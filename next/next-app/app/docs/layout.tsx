import Breadcrumbs from "@/app/ui/breadcrumbs";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Breadcrumbs />
      <main>{children}</main>
    </>
  );
}
