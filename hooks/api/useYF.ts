import { API_DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useState } from "react";

export const useYF = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getYFData = async (symbol: string) => {
    setIsLoading(true);
    return axios
      .get(`${API_DOMAIN}/api/yahoo_finance?symbol=${symbol}`)
      .then((response: any) => {
        return response.data;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    isLoading,
    getYFData,
  };
};
