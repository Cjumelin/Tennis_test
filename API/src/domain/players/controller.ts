import { FastifyPluginAsync } from "fastify";
import { playerGateway } from "./gateway";

const playerController: FastifyPluginAsync = async (fastify): Promise<void> => {
  const prefix = "players";

  fastify.get(prefix, async (_request, _reply) => playerGateway.retrieveAll());
};

export default playerController;
