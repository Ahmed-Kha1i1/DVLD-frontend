import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { defaultTimeStale } from "./Constants";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: defaultTimeStale,
    },
  },
  mutationCache: new MutationCache({
    onError: (error) => {
      toast.error(`Something went wrong (mu) ${error.message}`);
      console.log("error.stack", error.stack);
      console.log("error.name", error.name);
      console.log("error.cause", error.cause);
    },
  }),
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(`Something went wrong (qu): ${error.message}`);
      console.log("error.stack", error.stack);
      console.log("error.name", error.name);
      console.log("error.cause", error.cause);
    },
  }),
});

export default queryClient;
