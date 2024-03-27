import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useRef, useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/sortSelector";
import GameHeading from "./components/GameHeading";
import { useReactToPrint } from "react-to-print";
import useGameQueryStore from "./store";

function App() {
  const { gameQuery, setGenreId, setPlatformId, setSearchText, setSortOrder } =
    useGameQueryStore();
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav " "main" `,
          lg: `"nav nav" "aside  main" `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX="5px">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box>
            <GameHeading />
            <Flex paddingLeft={9}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>

              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
      {/* <TodoList /> */}
    </>
  );
}

export default App;
