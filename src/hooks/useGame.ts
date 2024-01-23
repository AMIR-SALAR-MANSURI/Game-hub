import { GameQuery } from './../App';

import useData from "./useData";
import { Genre } from "./useGenre";

 
export interface Platform{
  id:number
  name:string
  slug:string
  
}


export  interface Game {
    id: number;
    name: string;
    background_image:string
    parent_platforms:{platform:Platform}[]
    metacritic:number
  }
  

const useGame = (gameQuery:GameQuery)=> useData<Game>('/games',
{ params:{genres:gameQuery.genre?.id,platform:gameQuery.platform?.id,ordering:gameQuery.sortOrder}},
 [gameQuery])

export default useGame;