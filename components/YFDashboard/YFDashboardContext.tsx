"use client";
import { useYF } from "@/hooks/api/useYF";
import { createContext, FC, useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

export type YFDashboardContextType = {
  data: any;
  setData: any;
  loading: boolean;
  symbol: string | null;
  setSymbol: any;
};

export const YFDashboardContext = createContext<YFDashboardContextType>({
  data: null,
  setData: () => {},
  loading: true,
  symbol: null,
  setSymbol: () => {},
});

export type YFDashboardProviderProps = {
  children: React.ReactNode;
};

export const YFDashboardProvider: FC<YFDashboardProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<any>(null);
  const [symbol, setSymbol] = useState<string | null>(null);
  const { isLoading, getYFData } = useYF();

  useEffect(() => {
    if (!symbol) return;
    getYFData(symbol).then((data) => {
      if (data.error) {
        notifications.show({
          title: "Error",
          message: "Exists an error with the API, this data is not updated.",
          color: "red",
        });
      }
      setData(data);
    });
  }, [symbol]);

  return (
    <YFDashboardContext.Provider
      value={{
        data,
        setData,
        loading: isLoading,
        symbol,
        setSymbol,
      }}
    >
      {children}
    </YFDashboardContext.Provider>
  );
};
