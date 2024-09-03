import { API_DOMAIN } from "@/utils/constants";
import axios from "axios";

export const useTracker = () => {
  const getTrackerDeatils = () =>
    axios.get(`${API_DOMAIN}/api/tracker/trackers`);

  const createTracker = (data: any) =>
    axios.post(`${API_DOMAIN}/api/tracker/trackers`, data);

  const deleteTracker = (id: string) =>
    axios.delete(`${API_DOMAIN}/api/tracker/trackers/${id}`);

  const editTracker = (id: string, data: any) =>
    axios.put(`${API_DOMAIN}/api/tracker/trackers/${id}`, data);

  return {
    getTrackerDeatils,
    createTracker,
    deleteTracker,
    editTracker,
  };
};
