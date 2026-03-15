import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '2ee5f01b5f292b184251f9124588be23d0ae34ab', queries,  });
export default client;
  