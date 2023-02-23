import { ReactNode } from "react";
import { Player } from "../types/players.type";

type Props = {
    player: Player,
}; 

export const PlayerCard = ({
        player,
}: Props) => (
    <div 
        className="
            tw-w-auto
            tw-grid
            tw-grid-cols-1
            tw-justify-items-center
            tw-rounded
            tw-overflow-hidden
            tw-shadow-lg
            tw-p-2
            tw-m-2
            tw-bg-white"
    >
        <div className="tw-rounded-full tw-h-20 tw-w-20 tw-items-center" style={{backgroundImage: `url(${player.picture})`}}>
        </div>
        <div 
            className="tw-px-6"
        >
            <div 
                className="tw-font-bold tw-text-xl tw-mb-2"
            >
                {player.firstname + " " + player.lastname}
            </div>
            <p className="tw-text-gray-700 tw-text-base">
                Rank: {player.data.rank}
            </p>
        </div>
        <div 
            className="tw-grid tw-grid-col-1 tw-py-2 tw-w-full"
        >
            <p className="tw-font-bold tw-text-md tw-mb-2 tw-justify-self-start">
                Stat
            </p>
            <div className="tw-grid tw-text-start tw-bg-gray-200 tw-rounded-lg tw-p-1">
                <p>
                    Points:
                    <span className="tw-pl-2 tw-font-semibold">
                        {player.data.points}
                    </span>
                </p>
                <p>
                    Height:
                    <span className="tw-pl-2 tw-font-semibold">
                        {(player.data.height/ 100).toString().replace('.', 'm')}
                    </span>
                </p>
                <p>
                    Weight:
                    <span className="tw-pl-2 tw-font-semibold">
                        {player.data.weight / 1000}kg
                    </span>
                </p>
                <p>
                    Age: 
                    <span className="tw-pl-2 tw-font-semibold">
                        {player.data.age} ans
                    </span>
                </p>
            </div>
        </div>

        <div 
                className="
                    tw-rounded-xl
                    tw-w-full
                    tw-bg-gray-700
                    tw-text-white"
            >
                Total played time: ?
            </div>
    </div>
)