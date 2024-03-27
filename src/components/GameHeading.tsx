import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ""}${genre?.name || ""} Games `;

  return (
    <Heading fontSize={"5xl"} marginLeft={8} marginY={5} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
