import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""}${
    gameQuery.genre?.name || ""
  } Games `;
  return (
    <Heading fontSize={"5xl"} marginLeft={8} marginY={5} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
