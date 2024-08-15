"use client";
import { FC } from "react";
import { YFDashboardProvider } from "./YFDashboardContext";
import { YFDashboard } from "./YFDashboard";

export const YFDashboardContainer: FC = () => {
  return (
    <YFDashboardProvider>
      <YFDashboard />
    </YFDashboardProvider>
  );
};
