import {
  createClient as baseCreateClient,
  type Route,
} from "@prismicio/client";
import {
  enableAutoPreviews,
  type CreateClientConfig,
} from "@prismicio/next/pages";
import sm from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
const routes: Route[] = [
  { type: "home", path: "/" },
  { type: "about", path: "/a-propos" },
  { type: "digital_creation", path: "/digital" },
  { type: "audio_realization", path: "/prod-audio" },
  { type: "advertising_productions", path: "/publicite/:uid" },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = ({
  previewData,
  req,
  ...config
}: CreateClientConfig = {}) => {
  const client = baseCreateClient(repositoryName, {
    accessToken: process.env.ACCESS_TOKEN,
    routes,
    ...config,
  });

  enableAutoPreviews({ client, previewData, req });

  return client;
};
