import { join } from "path";
import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // This loads all plugins defined in routes
  // define your routes in one of these

  await fastify.register(AutoLoad, {
    dir: join(__dirname, "."),
    matchFilter: /.+controller\.(ts|js)/,
    dirNameRoutePrefix: false,
    routeParams: true,
    options: opts,
  });
  console.log(fastify.printRoutes());
};

export default app;
export { app, options };
