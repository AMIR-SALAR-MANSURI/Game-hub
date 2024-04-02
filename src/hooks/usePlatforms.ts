import { Genre } from "../entities/Genre";
import platform from "../data/platform";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchGenre } from "../services/api-clinet";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClinet = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClinet.getAll,
    staleTime: ms("24h"),
    initialData: platform,
  });

export default usePlatforms;
