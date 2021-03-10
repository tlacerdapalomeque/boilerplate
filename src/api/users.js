import { localInstance } from "../axios.config";

export async function getUser(email) {
  return await localInstance.get(`users/?email=${email}`);
}
