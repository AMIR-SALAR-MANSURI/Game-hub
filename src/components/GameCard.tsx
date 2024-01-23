import React from "react";
import { Game } from "../hooks/useGame";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
  const croppedImageUrl = getCroppedImageUrl(game.background_image);
  return (
    <div className="card">
      <Card>
        <Image src={croppedImageUrl} />
        <CardBody>
          <Heading fontSize={"`2xl"}>{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              paltforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
}