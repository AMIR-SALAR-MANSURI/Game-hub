import React from "react";
import { Game } from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

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
          <HStack marginBottom={3} justifyContent="space-between">
            <PlatformIconList
              paltforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"`2xl"}>
            <Link to={"/games/" + game.slug}>{game.name}</Link>
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </div>
  );
}
