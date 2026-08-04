import axios from "axios";
import { config } from "../lib/config";

export const api = axios.create({
  baseURL: config.apiUrl,
  withCredentials: true,
})
