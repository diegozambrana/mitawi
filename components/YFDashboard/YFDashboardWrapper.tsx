"use client";

import { Box } from "@mantine/core";
import { FC, useContext, useEffect } from "react";
import { YFDashboard } from "./YFDashboard";
import { useSearchParams } from "next/navigation";
import { SelectSymbolModal } from "./SelectSymbol";
import { YFDashboardContext } from "./YFDashboardContext";

export const YFDashboardWrapper: FC = () => {
  const searchParams = useSearchParams();
  const symbolParam = searchParams.get("symbol");
  const { symbol, setSymbol } = useContext(YFDashboardContext);

  useEffect(() => {
    if (symbolParam) setSymbol(symbolParam);
  }, [symbolParam]);

  return (
    <Box>
      {!symbol && (
        <Box mb={8}>
          <Box>
            <SelectSymbolModal />
          </Box>
        </Box>
      )}
      {symbol && (
        <Box>
          <Box mb="md">
            <SelectSymbolModal />
          </Box>
          <YFDashboard />
        </Box>
      )}
    </Box>
  );
};
