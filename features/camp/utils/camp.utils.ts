
import { useGetCamps } from "../hooks/camp.hooks";
import { Channel } from "diagnostics_channel";
import { Camp } from "../types/camp.types";
import { CHANNELS, PROJECT_CHANNELS } from "@/lib/camp-mock-data";

const {data} = useGetCamps()
const USER_CAMPS = data

export function getCampBySlug(slug: string): Camp | undefined {
  return USER_CAMPS.find((c: Camp) => c.slug === slug);
}

export function getChannelById(id: string): Channel | undefined {
  return [...CHANNELS, ...PROJECT_CHANNELS].find((c) => c.id === id);
}
