import config from "../config";
import axios from "axios";

export const deleteDuty = async (dutyId) => {
  const res = await axios.delete(config.BASE_URL + "/api/duties/" + dutyId);
  return res.data;
};
export const updateDuty = async (dutyId, data) => {
  const res = await axios.put(config.BASE_URL + "/api/duties/" + dutyId, {
    data,
  });
  return res.data;
};
export const createDuty = async (data) => {
  const res = await axios.post(config.BASE_URL + "/api/duties", { data });
  return res.data;
};
export const getDuty = async (dutyId) => {
  const res = await axios.get(config.BASE_URL + "/api/duties/" + dutyId);
  return res.data;
};
export const getDuties = async () => {
  const res = await axios.get(config.BASE_URL + "/api/duties");
  return res.data;
};
