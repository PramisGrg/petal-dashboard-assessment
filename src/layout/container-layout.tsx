import { cn } from "@/lib/utils";
import React from "react";

interface ContainerLayoutProps {
  children: React.ReactNode;
  className?: string;
}
const ContainerLayout = ({ children, className }: ContainerLayoutProps) => {
  return <main className={cn("mx-4 w-full py-4", className)}>{children}</main>;
};

export default ContainerLayout;
