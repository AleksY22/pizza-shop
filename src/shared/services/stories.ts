import { ApiRoutes } from "./api-routes";
import { axiosInstance } from "./instance";
import { Story, StoryItem } from "@/generated/prisma/client";

export type IStory = Story & {
  items: StoryItem[];
};

export const getAll = async () => {
  const res = await axiosInstance.get<IStory[]>(ApiRoutes.STORIES);

  return res.data;
};
