import { join } from "path";
import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import {
  FastifyBaseLogger,
  FastifyInstance,
  FastifyPluginAsync,
  FastifyTypeProviderDefault,
  RawServerDefault,
} from "fastify";
import { IncomingMessage, ServerResponse } from "http";

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

const initPlugins = async (
  fastify: FastifyInstance<
    RawServerDefault,
    IncomingMessage,
    ServerResponse<IncomingMessage>,
    FastifyBaseLogger,
    FastifyTypeProviderDefault
  >,
  opts: AppOptions
) => {
  await fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });

  await fastify.register(AutoLoad, {
    dir: join(__dirname, "."),
    matchFilter: /.+controller\.(ts|js)/,
    dirNameRoutePrefix: false,
    routeParams: true,
    options: opts,
  });
};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  await initPlugins(fastify, opts);
};

export default app;
export { app, options };
