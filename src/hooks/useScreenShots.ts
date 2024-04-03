import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clinet";
import { Screenshots } from "../entities/Screenshots";

const useScreenShots = (gameId: number) => {
  const apiCilent = new APIClient<Screenshots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiCilent.getAll,
  });
};
export default useScreenShots;
