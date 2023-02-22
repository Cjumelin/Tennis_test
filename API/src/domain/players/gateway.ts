import { players } from "./stub";

export const playerGateway = {
  retrieveAll: () =>
    players.sort((playerA, playerB) => playerA.id - playerB.id),
};
