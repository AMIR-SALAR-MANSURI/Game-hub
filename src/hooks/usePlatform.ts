import { Genre } from "./useGenre";
import platform from "../data/platform";
import { useQuery } from "@tanstack/react-query";
import apiClinet, { FetchGenre } from "../services/api-clinet";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClinet
        .get<FetchGenre<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 60 * 1000, //24h
    initialData: { count: platform.length, results: platform },
  });

export default usePlatform;
