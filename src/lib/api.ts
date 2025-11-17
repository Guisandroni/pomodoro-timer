import axios from "axios";
import { getDeviceId } from "./deviceId";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

api.interceptors.request.use((config) => {
  const deviceId = getDeviceId()
  
  if (config.params) {
    config.params.deviceId = deviceId
  } else {
    config.params = { deviceId }
  }
  
  return config
})



export default api;

