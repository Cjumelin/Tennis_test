import { FastifyPluginAsync } from "fastify";
import { playerGateway } from "../../domain/players/gateway";

const playerRoute: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get("", async function (_request, _reply) {
    const players = playerGateway.retrieveAll();
    return players;
  });
};

export default playerRoute;
