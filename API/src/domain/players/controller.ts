import { FastifyPluginAsync } from "fastify";
import { playerGateway } from "./gateway";

const playerController: FastifyPluginAsync = async (fastify): Promise<void> => {
  const prefix = "players";

  fastify.get(prefix, async (_request, _reply) => playerGateway.retrieveAll());
  fastify.get(prefix + "/:id", async ({ params }, _reply: any) => {
    const tParams = params as { id: string };
    const res = await playerGateway.retrieveOne(parseInt(tParams.id));
    if (res) return res;
    throw fastify.httpErrors.notFound();
  });
};

export default playerController;
