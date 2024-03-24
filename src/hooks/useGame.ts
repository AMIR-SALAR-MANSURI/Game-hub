import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "./../App";
import apiClinet, { FetchGenre } from "../services/api-clinet";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

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
      apiClinet
        .get<FetchGenre<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platform: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGame;
