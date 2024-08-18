"use client";
import { FC } from "react";
import { YFDashboardProvider } from "./YFDashboardContext";
import { YFDashboardWrapper } from "./YFDashboardWrapper";
import { Suspense } from "react";

export const YFDashboardContainer: FC = () => {
  return (
    <YFDashboardProvider>
      <Suspense>
        <YFDashboardWrapper />
      </Suspense>
    </YFDashboardProvider>
  );
};
