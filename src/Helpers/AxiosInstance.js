import axios from "axios";
import { COIN_GECO_API } from "./Constants";

const axiosInstance = axios.create({
  baseURL: COIN_GECO_API
});
export default axiosInstance;