
import { ReactNode, useEffect, useState } from "react";
import { Player } from "../types/players.type";
import { PlayerCard } from "./playerCard";

type Props = {
    players: Player[],
}; 

export const Versus = ({
    players
}: Props) => {
    const [versus, setVersus] = useState<Player[]>([]);

    const randFromZeroTo = (limit: number) => (Math.floor(Math.random() * (limit - 1)));

    useEffect(() => {
          const playerOneNumber = randFromZeroTo(players.length)
          const playerOne: Player = players[playerOneNumber]
          
          const playersWithoutP1: Player[] = [...players]
          playersWithoutP1.splice(playerOneNumber, 1)

          const playerTwoNumber = randFromZeroTo(playersWithoutP1.length)
          const playerTwo = playersWithoutP1[playerTwoNumber]
          
          setVersus([playerOne, playerTwo])
      }, [players]);

      
    return (
    <div className='tw-flex tw-flex-col md:tw-flex-row tw-flex-wrap '>
         {versus[0] && <PlayerCard player={versus[0]}/>} VS { versus[1] && <PlayerCard player={versus[1]}/>}
    </div>)
}