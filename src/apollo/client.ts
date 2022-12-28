import {ApolloClient, InMemoryCache} from "@apollo/client";
import { API_URL } from "../constants/repo";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: API_URL,
  cache,
  connectToDevTools: true,
});

export default client;