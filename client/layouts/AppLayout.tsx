import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 mt-16">{children}</main>
      <Footer />
    </div>
  );
};
