import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchGenre } from "../services/api-clinet";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";
const apiClinet = new APIClient<Game>("/games");
const useGame = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchGenre<Game>, Error>({
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
};

export default useGame;
