"use client";
import { FC } from "react";
import { YFDashboardProvider } from "./YFDashboardContext";
import { YFDashboardWrapper } from "./YFDashboardWrapper";

export const YFDashboardContainer: FC = () => {
  return (
    <YFDashboardProvider>
      <YFDashboardWrapper />
    </YFDashboardProvider>
  );
};
