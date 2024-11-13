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
      toast.error(`Something went wrong: ${error.message}`);
    },
  }),
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(`Something went wrong: ${error.message}`);
    },
  }),
});

export default queryClient;
