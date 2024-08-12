import { useMutation } from "convex/react";
import { useState } from "react";

export const useApiMutation = (mutationFunction: any) => {
  const [pending, setIsPending] = useState(false);

  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setIsPending(true);
    return apiMutation(payload)
      .finally(() => setIsPending(false))
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  };

  return { mutate, pending };
};
