import { localInstance } from "../axios.config";

export async function getAuthentication(body) {
  return await localInstance.post("login", body);
}
