// ############################################################################
// TODO => Quick fix to solve
// https://stackoverflow.com/questions/69041454/error-require-of-es-modules-is-not-supported-when-importing-node-fetch

// ############################################################################
const _importDynamic = new Function("modulePath", "return import(modulePath)");
export const fetch = async function (...args: any) {
  const { default: fetch } = await _importDynamic("node-fetch");
  return fetch(...args);
};
// ############################################################################

const apiURL =
  "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json";

const playersFetcher = async (): Promise<Player[]> => {
  const res = await fetch(apiURL);
  return (await res.json()).players;
};

const retrieveAll = async () => {
  const players = await playersFetcher();
  return players.sort((playerA, playerB) => playerA.id - playerB.id); // query ?sort=id not working :(
};
const retrieveOne = async (id: number): Promise<Player | undefined> => {
  const players = await playersFetcher();
  return players.find((player) => player.id === id);
};

export const playerGateway = {
  retrieveAll,
  retrieveOne,
};
