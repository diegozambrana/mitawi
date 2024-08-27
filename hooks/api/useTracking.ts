import { DetailElement } from "@/components/tracker/components/DetailsEditor";
import { API_DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const useTracking = (code: string) => {
  const [trackerDetail, setTrackerDetail] = useState<any>();
  const [trackingList, setTrackingList] = useState<any[]>([]);
  const trackerDetailsId = useRef("");
  const [currentTracking, setCurrentTracking] = useState<any | null>({});

  useEffect(() => {
    if (trackerDetail?.id) {
      getTrackingList();
    }
  }, [trackerDetail]);

  const getBaseDataDetails = () => {
    let data: any = {};
    trackerDetail.details.forEach((detail: DetailElement) => {
      data[detail?.field] =
        detail.type === "text" ? "" : detail.type === "number" ? 0 : false;
    });
    return data;
  };

  const getTrackerDetail = () =>
    axios.get(`${API_DOMAIN}/api/tracker/trackers/${code}`).then((res) => {
      trackerDetailsId.current = res.data["id"];
      setTrackerDetail(res.data);
      return res;
    });

  const updateTrackerDetail = (data: any) => {
    return axios.put(`${API_DOMAIN}/api/tracker/trackers/${code}`, data);
  };

  const startTracking = () =>
    axios
      .post(`${API_DOMAIN}/api/tracker/start_track/${trackerDetailsId.current}`)
      .then((res) => {
        setCurrentTracking({ ...res.data, data: getBaseDataDetails() });
        return res;
      });

  const getTracking = (id: string) =>
    axios.get(`${API_DOMAIN}/api/tracker/${id}`);

  const updateTracking = (id: string, data: any) =>
    axios.put(`${API_DOMAIN}/api/tracker/${id}`, data).then((res) => {
      setCurrentTracking(res.data);
      return res;
    });

  const deleteTracking = (id: string) =>
    axios.delete(`${API_DOMAIN}/api/tracker/${id}`).finally(() => {
      getTrackingList();
    });

  const getTrackingList = () =>
    axios
      .get(`${API_DOMAIN}/api/tracker/trackers/${trackerDetail.id}/tracks`)
      .then((res) => {
        setTrackingList(res.data);
        return res;
      });

  const finishTracking = () => {
    return currentTracking
      ? axios
          .put(
            `${API_DOMAIN}/api/tracker/${currentTracking?.tracker_id}/finish_track`
          )
          .then((res) => {
            setCurrentTracking(null);
            getTrackingList();
            return res;
          })
      : null;
  };

  return {
    getTrackerDetail,
    updateTrackerDetail,
    startTracking,
    getTracking,
    updateTracking,
    deleteTracking,
    finishTracking,
    getTrackingList,
    trackerDetail,
    trackingList,
    currentTracking,
  };
};
