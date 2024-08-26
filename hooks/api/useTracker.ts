import { API_DOMAIN } from "@/utils/constants";
import axios from "axios";

export const useTracker = () => {
  const getTrackerDeatils = () =>
    axios.get(`${API_DOMAIN}/api/tracker/trackers`);
  const createTracker = (data: any) =>
    axios.post(`${API_DOMAIN}/api/tracker/trackers`, data);
  return {
    getTrackerDeatils,
    createTracker,
  };
};
