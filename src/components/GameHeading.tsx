import { Heading } from "@chakra-ui/react";
import React, { useRef } from "react";
import { GameQuery } from "../App";
import { useReactToPrint } from "react-to-print";
import useGenres from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const heading = `${platform?.name || ""}${genre?.name || ""} Games `;

  return (
    <Heading fontSize={"5xl"} marginLeft={8} marginY={5} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
