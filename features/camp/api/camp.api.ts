import { api } from "@/lib/axios";
import { NewCamp } from "../types/camp.types";
import { useMe } from "@/features/auth/hooks/auth.hooks";

export async function createCamp(data: NewCamp) {
  try {
    const res = await api.post("/camps/create", data);
    return res.data;
  } catch (error: unknown) {
    console.error(error);
  }
}

export async function getCamps(userId: string) {

  if(userId == undefined) return; // TODO: do a better validation

  try {
    const res = await api.get(`camps/getAll/${userId}`);
    console.log(res.data)
    return res.data;
  } catch (error: unknown) {
    console.error(error);
  }
}


export async function discoverCamps() {
  try {
    const res = await api.get("/camps/discover")
    return res.data
  } catch (error: unknown) {
	console.error(error);
  }
}


export async function getChannelsOfCamp(campId: string) {
  try {
    const res = await api.get(`/camps/channels/${campId}`)
    return res.data
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
}