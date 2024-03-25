import { Genre } from "./useGenre";
import platform from "../data/platform";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchGenre } from "../services/api-clinet";
import ms from "ms";

const apiClinet = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClinet.getAll,
    staleTime: ms("24h"),
    initialData: platform,
  });

export default usePlatforms;
