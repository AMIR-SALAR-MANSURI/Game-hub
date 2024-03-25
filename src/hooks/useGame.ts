import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "./../App";
import { Platform } from "./usePlatforms";
import APIClient, { FetchGenre } from "../services/api-clinet";
import ms from "ms";
const apiClinet = new APIClient<Game>("/games");
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchGenre<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClinet.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platform: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });

export default useGame;
