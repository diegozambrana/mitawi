"use client";
import { useYF } from "@/hooks/api/useYF";
import { createContext, FC, useEffect, useState } from "react";

export type YFDashboardContextType = {
  data: any;
  setData: any;
  loading: boolean;
  // setLoading: any;
};

export const YFDashboardContext = createContext<YFDashboardContextType>({
  data: null,
  setData: () => {},
  loading: true,
  // setLoading: () => {},
});

export type YFDashboardProviderProps = {
  children: React.ReactNode;
};

export const YFDashboardProvider: FC<YFDashboardProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<any>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  const { isLoading, getYFData } = useYF();

  useEffect(() => {
    getYFData("BTC-USD").then((data) => {
      setData(data);
    });
  }, []);

  return (
    <YFDashboardContext.Provider
      value={{
        data,
        setData,
        loading: isLoading,
        // setLoading,
      }}
    >
      {children}
    </YFDashboardContext.Provider>
  );
};
