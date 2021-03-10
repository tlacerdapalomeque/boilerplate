import axios from "axios";
import { BOILERPLATE_API } from "./config";

const localInstance = axios.create({
  baseURL: BOILERPLATE_API,
  timeout: 120000,
});

export { localInstance };
