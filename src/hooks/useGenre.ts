import genre from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clinet";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClinet = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClinet.getAll,
    staleTime: ms("24h"),
    initialData: { next: null, count: genre.length, results: genre },
  });

export default useGenres;
