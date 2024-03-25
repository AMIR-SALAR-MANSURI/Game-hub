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

export interface GameQuery {
  genreId?: number;
  platformId: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX="5px">
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelecteGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box>
            <GameHeading gameQuery={gameQuery} />
            <Flex paddingLeft={9}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatformId={gameQuery.platformId}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platformId: platform.id })
                  }
                />
              </Box>

              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid
            // selectedPlatform={gameQuery.platform}
            // selectedGenre={gameQuery.genre}
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
      {/* <TodoList /> */}
    </>
  );
}

export default App;
