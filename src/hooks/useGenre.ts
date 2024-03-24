import { Image } from "@chakra-ui/react";
import genres from "../data/genres";
import { useQueries, useQuery } from "@tanstack/react-query";
import apiClinet, { FetchGenre } from "../services/api-clinet";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClinet.get<FetchGenre<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
