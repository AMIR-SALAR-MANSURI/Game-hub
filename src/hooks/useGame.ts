import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "./../App";
import { Platform } from "./usePlatform";
import APIClient, { FetchGenre } from "../services/api-clinet";
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
  useQuery<FetchGenre<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClinet.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platform: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGame;
