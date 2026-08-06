import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCamp, getCamps } from "../api/camp.api";


export function useCreateCamp() {

  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createCamp,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-camps"]
      });
    },
  })
}

export function useGetCamps() {
  return useQuery({
    queryKey: ["user-camps"],
    queryFn: getCamps,
  });
}